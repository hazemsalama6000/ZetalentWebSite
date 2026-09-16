import { Component, computed, inject } from '@angular/core';
import { PageHeader } from '../shared/page-header';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

interface OfficeText {
  region: string;
  address: string;
}

interface Office extends OfficeText {
  phones: string[];
}

const OFFICE_PHONES: string[][] = [
  ['+966 114040315', '+966 507471935'],
  ['+202 24026452', '+20100 7513507'],
];

@Component({
  selector: 'app-contact',
  imports: [PageHeader, Reveal, Icon, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(I18nService);

  protected readonly offices = computed<Office[]>(() =>
    this.i18n
      .list<OfficeText>('contact.offices')
      .map((office, i) => ({ ...office, phones: OFFICE_PHONES[i] ?? [] })),
  );

  protected readonly contactEmail = 'info@zetalents.com';

  protected onSubmit(event: Event, name: string, email: string, phone: string, message: string): void {
    event.preventDefault();
    const subject = encodeURIComponent(
      this.i18n.translate('contact.mailSubject', {
        name: name || this.i18n.translate('contact.aVisitor'),
      }),
    );
    const contactLine = [name, email, phone].filter(Boolean).join(' — ');
    const body = encodeURIComponent(`${message}\n\n${contactLine}`);
    window.location.href = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
  }
}
