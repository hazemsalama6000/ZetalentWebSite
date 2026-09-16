import { AfterViewInit, Component, DestroyRef, ElementRef, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PageHeader } from '../shared/page-header';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

interface PolicyItem {
  label?: string;
  text: string;
}

interface PolicySection {
  number: string;
  title: string;
  intro?: string[];
  items?: PolicyItem[];
  outro?: string[];
}

interface ContactSectionText {
  number: string;
  title: string;
  intro: string;
  cardTitle: string;
  dpoLink: string;
  footnote: string;
}

@Component({
  selector: 'app-privacy-policy',
  imports: [PageHeader, Reveal, Icon, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements AfterViewInit {
  protected readonly i18n = inject(I18nService);

  protected readonly contactEmail = 'info@zetalentss.com';
  protected readonly websiteUrl = 'www.zetalentss.com';

  protected readonly sections = computed(() => this.i18n.list<PolicySection>('privacyPolicy.sections'));

  protected readonly contactSection = computed(() =>
    this.i18n.raw<ContactSectionText>('privacyPolicy.contactSection'),
  );

  protected readonly tocEntries = computed(() => {
    const contact = this.contactSection();
    const entries = this.sections().map((s) => ({ number: s.number, title: s.title }));
    return contact ? [...entries, { number: contact.number, title: contact.title }] : entries;
  });

  protected readonly activeSection = signal('1');

  private readonly sanitizer = inject(DomSanitizer);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    const sections = Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>('[data-section-id]'),
    );
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          this.activeSection.set(visible.target.getAttribute('data-section-id') ?? '1');
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((el) => this.observer?.observe(el));
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  protected linkify(text: string): SafeHtml {
    const html = text.replace(
      /([\w.-]+@[\w.-]+\.\w+)/g,
      (email) => `<a href="mailto:${email}" dir="ltr">${email}</a>`,
    );
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
