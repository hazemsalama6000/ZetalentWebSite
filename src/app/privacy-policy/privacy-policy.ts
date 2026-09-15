import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { iconMarkup } from '../icons';
import { Reveal } from '../shared/reveal';

interface PolicyItem {
  label?: string;
  text: string;
}

interface PolicySection {
  number: string;
  title: string;
  intro?: string[];
  items?: PolicyItem[];
  outro?: string[];
}

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, Reveal],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  protected readonly lastUpdated = 'November 28, 2025';
  protected readonly contactEmail = 'info@zetalentss.com';
  protected readonly websiteUrl = 'www.zetalentss.com';

  protected readonly sections: PolicySection[] = [
    {
      number: '1',
      title: 'Information We Collect',
      intro: ['We may collect the following types of data:'],
      items: [
        {
          label: 'A. Personal Information',
          text: 'Name, Email address, Phone number, Job title, Company name',
        },
        {
          label: 'B. Usage & Technical Data',
          text: 'IP address, Browser type, Device information, Pages visited, Cookies and tracking data',
        },
        {
          label: 'C. Information You Provide Directly',
          text: 'Forms submitted on our website, Demo requests, Support inquiries',
        },
      ],
    },
    {
      number: '2',
      title: 'How We Use Your Information',
      intro: ['We use your data to:'],
      items: [
        { text: 'Provide and improve our services' },
        { text: 'Respond to your inquiries and support requests' },
        { text: 'Send updates, newsletters, and promotional messages (with your consent)' },
        { text: 'Analyze website performance' },
        { text: 'Enhance user experience' },
        { text: 'Comply with legal obligations' },
      ],
    },
    {
      number: '3',
      title: 'Legal Basis for Processing (GDPR & PDPL Compliance)',
      intro: ['We process your data based on:'],
      items: [
        { text: 'Your consent' },
        { text: 'Legitimate business interest' },
        { text: 'Contractual necessity' },
        { text: 'Compliance with legal requirements' },
      ],
    },
    {
      number: '4',
      title: 'Sharing Your Information',
      intro: ['We do not sell or rent your personal data. We may share your information with:'],
      items: [
        { text: 'Service providers assisting in website hosting, analytics, and communication' },
        { text: 'Government authorities when legally required' },
        { text: 'Internal Zetalents teams for operational purposes' },
      ],
      outro: ['All third parties follow strict confidentiality and data protection rules.'],
    },
    {
      number: '5',
      title: 'Data Storage & Security',
      intro: ['We apply strong technical and organizational measures to protect your data, including:'],
      items: [
        { text: 'Encryption' },
        { text: 'Access controls' },
        { text: 'Secure servers' },
        { text: 'Regular security reviews' },
      ],
    },
    {
      number: '6',
      title: 'Data Retention',
      intro: ['We retain personal data only as long as necessary for:'],
      items: [
        { text: 'Providing our services' },
        { text: 'Legal compliance' },
        { text: 'Business needs' },
      ],
      outro: ['After that, data is securely deleted or anonymized.'],
    },
    {
      number: '7',
      title: 'Cookies',
      intro: [
        'Our website uses cookies for analytics, performance improvement, and user experience customization. You can manage or disable cookies through your browser settings.',
      ],
    },
    {
      number: '8',
      title: 'Your Rights',
      intro: ['Depending on your location, you may have the right to:'],
      items: [
        { text: 'Access your data' },
        { text: 'Update or correct your information' },
        { text: 'Request deletion' },
        { text: 'Withdraw consent' },
        { text: 'Object to processing' },
        { text: 'Request data portability' },
      ],
      outro: ['To exercise your rights, contact us at: info@zetalentss.com'],
    },
    {
      number: '9',
      title: 'Third-Party Links',
      intro: [
        'Our website may contain links to external sites. We are not responsible for the privacy practices of these websites.',
      ],
    },
    {
      number: '10',
      title: 'Updates to This Policy',
      intro: [
        'We may update this Privacy Policy occasionally. All updates will be posted on this page with a revised "Last updated" date.',
      ],
    },
  ];

  constructor(private readonly sanitizer: DomSanitizer) {}

  protected icon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconMarkup(name));
  }

  protected linkify(text: string): SafeHtml {
    const html = text.replace(
      /([\w.-]+@[\w.-]+\.\w+)/g,
      (email) => `<a href="mailto:${email}">${email}</a>`,
    );
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
