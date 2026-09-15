import { Component } from '@angular/core';
import { PageHeader } from '../shared/page-header';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';

interface Office {
  region: string;
  address: string;
  phones: string[];
}

@Component({
  selector: 'app-contact',
  imports: [PageHeader, Reveal, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly offices: Office[] = [
    {
      region: 'Saudi Arabia — Riyadh Office',
      address: '2666 Al Mursalat Dist., Riyadh, KSA.',
      phones: ['+966 114040315', '+966 507471935'],
    },
    {
      region: 'Egypt — Cairo Office',
      address: '2 ElNasr Rd., Nasr City, Cairo, Egypt.',
      phones: ['+202 24026452', '+20100 7513507'],
    },
  ];

  protected readonly contactEmail = 'info@zetalents.com';

  protected onSubmit(event: Event, name: string, email: string, phone: string, message: string): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || 'a visitor'}`);
    const contactLine = [name, email, phone].filter(Boolean).join(' — ');
    const body = encodeURIComponent(`${message}\n\n${contactLine}`);
    window.location.href = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
  }
}
