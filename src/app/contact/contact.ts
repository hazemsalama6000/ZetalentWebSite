import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { iconMarkup } from '../icons';
import { Reveal } from '../shared/reveal';

interface Office {
  region: string;
  address: string;
  phones: string[];
}

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Reveal],
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

  constructor(private readonly sanitizer: DomSanitizer) {}

  protected icon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconMarkup(name));
  }

  protected onSubmit(event: Event, name: string, email: string, message: string): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`);
    window.location.href = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
  }
}
