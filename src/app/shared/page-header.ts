import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from './reveal';
import { Icon } from './icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterLink, Reveal, Icon, TranslatePipe],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  protected readonly i18n = inject(I18nService);

  @Input() backPath: unknown[] = ['/'];
  @Input() backFragment?: string;
  @Input() backLabel?: string;
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) heading!: string;
}
