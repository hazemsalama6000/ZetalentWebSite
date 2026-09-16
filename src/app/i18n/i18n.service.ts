import { Injectable, computed, signal } from '@angular/core';
import { en } from './translations/en';
import { ar } from './translations/ar';

export type Lang = 'en' | 'ar';

type Dict = Record<string, unknown>;

const DICTS: Record<Lang, Dict> = { en, ar };
const STORAGE_KEY = 'zetalents-lang';
const ICON_MIRRORS: Record<string, string> = {
  arrowLeft: 'arrowRight',
  arrowRight: 'arrowLeft',
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly langSignal = signal<Lang>(this.detectInitialLang());

  readonly lang = this.langSignal.asReadonly();
  readonly dir = computed<'ltr' | 'rtl'>(() => (this.langSignal() === 'ar' ? 'rtl' : 'ltr'));
  readonly isRtl = computed(() => this.langSignal() === 'ar');

  constructor() {
    this.applyDocumentAttributes(this.langSignal());
  }

  setLang(lang: Lang): void {
    if (lang === this.langSignal()) {
      return;
    }
    this.langSignal.set(lang);
    this.applyDocumentAttributes(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — language just won't persist */
    }
  }

  toggle(): void {
    this.setLang(this.langSignal() === 'en' ? 'ar' : 'en');
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const value = this.resolve(DICTS[this.langSignal()], key) ?? this.resolve(DICTS.en, key);
    const text = typeof value === 'string' ? value : key;
    if (!params) {
      return text;
    }
    return Object.keys(params).reduce(
      (acc, param) => acc.replace(new RegExp(`\\{${param}\\}`, 'g'), String(params[param])),
      text,
    );
  }

  list<T>(key: string): T[] {
    const value = this.raw<T[]>(key);
    return Array.isArray(value) ? value : [];
  }

  raw<T>(key: string): T | undefined {
    const value = this.resolve(DICTS[this.langSignal()], key) ?? this.resolve(DICTS.en, key);
    return value as T | undefined;
  }

  mirrorIcon(name: string): string {
    return this.isRtl() ? (ICON_MIRRORS[name] ?? name) : name;
  }

  private resolve(dict: Dict, key: string): unknown {
    return key
      .split('.')
      .reduce<unknown>(
        (acc, part) => (acc && typeof acc === 'object' ? (acc as Dict)[part] : undefined),
        dict,
      );
  }

  private detectInitialLang(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'en';
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'ar' || stored === 'en' ? stored : 'en';
    } catch {
      return 'en';
    }
  }

  private applyDocumentAttributes(lang: Lang): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
