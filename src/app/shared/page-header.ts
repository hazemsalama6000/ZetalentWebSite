import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from './reveal';
import { Icon } from './icon';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterLink, Reveal, Icon],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  @Input() backPath: unknown[] = ['/'];
  @Input() backFragment?: string;
  @Input() backLabel = 'Back to Home';
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) heading!: string;
}
