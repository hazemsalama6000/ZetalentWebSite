import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { iconMarkup } from '../icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span [innerHTML]="markup()"></span>`,
  host: { style: 'display: contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly name = signal('');

  @Input({ required: true })
  set iconName(value: string) {
    this.name.set(value);
  }

  protected readonly markup = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(iconMarkup(this.name())),
  );
}
