import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../shared/page-header';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { TranslatePipe } from '../i18n/translate.pipe';
import { I18nService } from '../i18n/i18n.service';
import { BLOG_POSTS, BlogContent, BlogPost } from '../blog-data';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, PageHeader, Reveal, Icon, TranslatePipe],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {
  private readonly i18n = inject(I18nService);

  protected readonly posts = computed<BlogPost[]>(() =>
    BLOG_POSTS.map((meta) => ({
      ...meta,
      ...(this.i18n.raw<BlogContent>(`blogPosts.${meta.slug}`) as BlogContent),
    })),
  );
}
