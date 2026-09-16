import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Icon } from './shared/icon';
import { I18nService } from './i18n/i18n.service';
import { TranslatePipe } from './i18n/translate.pipe';

interface NavLink {
  labelKey: string;
  fragment: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Icon, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected readonly i18n = inject(I18nService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeFragment = signal<string | null>(null);

  protected readonly navLinks: NavLink[] = [
    { labelKey: 'nav.whoWeAre', fragment: 'who-we-are' },
    { labelKey: 'nav.manageItAll', fragment: 'manage-it-all' },
    { labelKey: 'nav.whyZetalents', fragment: 'why-zetalents' },
    { labelKey: 'nav.products', fragment: 'products' },
    { labelKey: 'nav.clients', fragment: 'clients' },
  ];

  private sectionObserver?: IntersectionObserver;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      queueMicrotask(() => this.observeSections());
    });
    queueMicrotask(() => this.observeSections());
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private observeSections(): void {
    this.sectionObserver?.disconnect();
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.navLinks
      .map((link) => document.getElementById(link.fragment))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) {
      this.activeFragment.set(null);
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          this.activeFragment.set(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((el) => this.sectionObserver?.observe(el));
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleLang(): void {
    this.i18n.toggle();
  }
}
