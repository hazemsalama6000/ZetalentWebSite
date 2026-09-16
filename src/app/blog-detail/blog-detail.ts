import { AfterViewInit, Component, DestroyRef, ElementRef, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BLOG_POSTS, BlogContent, BlogPost } from '../blog-data';
import { PageHeader } from '../shared/page-header';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { TranslatePipe } from '../i18n/translate.pipe';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, PageHeader, Reveal, Icon, TranslatePipe],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetail implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly post = computed<BlogPost | undefined>(() => {
    const meta = BLOG_POSTS.find((p) => p.slug === this.slug());
    if (!meta) {
      return undefined;
    }
    const content = this.i18n.raw<BlogContent>(`blogPosts.${meta.slug}`);
    return content ? { ...meta, ...content } : undefined;
  });

  protected readonly activeSection = signal('');

  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    queueMicrotask(() => this.observeSections());
  }

  private observeSections(): void {
    this.observer?.disconnect();
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>('[data-section-id]'),
    );
    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          this.activeSection.set(visible.target.getAttribute('data-section-id') ?? '');
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((el) => this.observer?.observe(el));
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}
