import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

interface IntegrationItem {
  name: string;
  desc: string;
  icon: string;
  tags: string[];
}

interface Step {
  title: string;
  desc: string;
}

const AUTO_ADVANCE_MS = 4200;

@Component({
  selector: 'app-integrations',
  imports: [RouterLink, Reveal, Icon, TranslatePipe],
  templateUrl: './integrations.html',
  styleUrl: './integrations.scss',
})
export class Integrations {
  protected readonly i18n = inject(I18nService);

  protected readonly items = computed(() => this.i18n.list<IntegrationItem>('integrations.items'));
  protected readonly steps = computed(() => this.i18n.list<Step>('integrations.steps'));
  protected readonly stepIcons = ['link', 'cpu', 'checkCircle'];

  protected readonly active = signal(0);
  protected readonly current = computed(() => this.items()[this.active()]);
  protected readonly currentList = computed(() => [this.current()].filter(Boolean));
  protected readonly angleStep = computed(() => 360 / Math.max(this.items().length, 1));

  private paused = false;

  constructor() {
    const timer = setInterval(() => {
      const total = this.items().length;
      if (!this.paused && total) this.active.update((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }

  protected select(index: number): void {
    this.active.set(index);
  }

  protected pause(value: boolean): void {
    this.paused = value;
  }
}
