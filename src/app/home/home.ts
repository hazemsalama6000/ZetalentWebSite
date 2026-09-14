import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { iconMarkup } from '../icons';
import { MODULES } from '../modules-data';
import { Reveal } from '../shared/reveal';
import { CountUp } from '../shared/count-up';

interface StatItem {
  value: string;
  label: string;
}

interface AudienceCard {
  icon: string;
  title: string;
  description: string;
  dark: boolean;
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal, CountUp],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly modules = MODULES;

  protected readonly heroStats: StatItem[] = [
    { value: '2016', label: 'Operating since, from Riyadh KSA' },
    { value: '3', label: 'Markets served — KSA, Egypt & MENA' },
    { value: '10', label: 'Integrated HCIS modules' },
    { value: '100%', label: 'Cloud-hosted, web-based platform' },
  ];

  protected readonly audienceCards: AudienceCard[] = [
    {
      icon: 'users',
      title: 'Employees',
      description: 'Full profiles, documentation, self-service & asset management.',
      dark: false,
    },
    {
      icon: 'clipboardCheck',
      title: 'Managers',
      description: 'Approvals, oversight, and team performance tools.',
      dark: false,
    },
    {
      icon: 'building',
      title: 'Company',
      description: 'Organization structures, payroll, talent & analytics.',
      dark: true,
    },
  ];

  protected readonly featureCards: FeatureCard[] = [
    {
      icon: 'target',
      title: 'Regional Focus',
      description: 'Operating since 2016, serving clients across Saudi Arabia, Egypt, and the wider MENA region.',
    },
    {
      icon: 'cloud',
      title: 'Fully Cloud-Based',
      description: 'A web-based, cloud-hosted HCIS covering the complete employee lifecycle in one platform.',
    },
    {
      icon: 'shieldCheck',
      title: 'Configurable',
      description: 'Adaptable to local labor law, payroll, and reporting requirements — plus native government integrations.',
    },
    {
      icon: 'link',
      title: 'Integration & Connectivity',
      description: 'Seamlessly connects with government platforms, ERP systems, and time & attendance devices.',
    },
    {
      icon: 'smartphone',
      title: 'Ease of Use & Flexibility',
      description: 'An intuitive interface and highly configurable workflows that adapt to how your team works.',
    },
    {
      icon: 'checkCircle',
      title: 'End-to-End',
      description: 'One connected system spanning core HR, workforce management, and talent — no more scattered tools.',
    },
    {
      icon: 'globe',
      title: 'Localized',
      description: 'Arabic and English support, fully aligned with local labor law and government requirements.',
    },
    {
      icon: 'cpu',
      title: 'Hi-Tech',
      description: 'Built on a modern, secure cloud architecture that scales with your organization.',
    },
    {
      icon: 'handshake',
      title: 'Dedicated Support',
      description: 'A technical support team with deep product expertise standing behind every deployment.',
    },
  ];

  protected readonly clientsRowOne: Client[] = [
    { name: 'Saudi Finance Company', logo: 'clients-images/Picture3.png' },
    { name: 'Skyband', logo: 'clients-images/Picture4.png' },
    { name: 'RSM', logo: 'clients-images/Picture5.png' },
    { name: 'Najm Hajm', logo: 'clients-images/Picture6.png' },
    { name: 'Al Jammaz', logo: 'clients-images/Picture7.png' },
    { name: 'Zamil Food Industries', logo: 'clients-images/Picture8.png' },
    { name: 'Najm Manafith', logo: 'clients-images/Picture9.png' },
    { name: 'Assila', logo: 'clients-images/Picture10.png' },
    { name: 'Advanced Piping Solutions', logo: 'clients-images/Picture11.png' },
    { name: 'Satex', logo: 'clients-images/Picture12.jpg' },
    { name: 'Hayat National Hospitals', logo: 'clients-images/Picture13.jpg' },
    { name: 'Raya Financing', logo: 'clients-images/Picture14.png' },
    { name: 'Derayah', logo: 'clients-images/Picture15.png' },
    { name: 'Al-Najim Saudi International', logo: 'clients-images/Picture16.jpg' },
    { name: 'Al Mimar Al Araby', logo: 'clients-images/Picture17.jpg' },
    { name: 'Taswia', logo: 'clients-images/Picture18.jpg' },
    { name: 'Almulhim Holding Co.', logo: 'clients-images/Picture19.jpg' },
    { name: 'AICC', logo: 'clients-images/Picture20.png' },
    { name: 'Al Jammaz Cloud', logo: 'clients-images/Picture21.png' },
    { name: 'Al Jammaz Investments', logo: 'clients-images/Picture22.png' },
    { name: 'Sheraa Air Conditioning & Energy', logo: 'clients-images/Picture23.png' },
    { name: 'VAD', logo: 'clients-images/Picture24.png' },
    { name: 'Arabian Trade House', logo: 'clients-images/Picture25.png' },
  ];

  protected readonly clientsRowTwo: Client[] = [
    { name: 'Mazaya', logo: 'clients-images/Picture26.png' },
    { name: 'Fulbright Egypt', logo: 'clients-images/Picture27.png' },
    { name: 'SEC Smart Engineering', logo: 'clients-images/Picture28.png' },
    { name: 'iTouch Stores', logo: 'clients-images/Picture29.png' },
    { name: 'Keller', logo: 'clients-images/Picture30.png' },
    { name: 'Saraya', logo: 'clients-images/Picture31.png' },
    { name: 'Fedex Egypt', logo: 'clients-images/Picture32.png' },
    { name: 'Thales', logo: 'clients-images/Picture33.png' },
    { name: 'Jokey', logo: 'clients-images/Picture34.png' },
    { name: 'Mymsa for Agencies & Trade', logo: 'clients-images/Picture35.jpg' },
    { name: 'Rasgharib Wind Energy', logo: 'clients-images/Picture36.jpg' },
    { name: 'Red Sea Wind Energy', logo: 'clients-images/Picture37.png' },
    { name: 'UGCE Consultants', logo: 'clients-images/Picture38.png' },
    { name: 'Jenin Contracting', logo: 'clients-images/Picture39.png' },
    { name: 'Dr. Ahmad Fond', logo: 'clients-images/Picture40.jpg' },
    { name: 'Prisma Foods', logo: 'clients-images/Picture41.jpg' },
    { name: 'Future House', logo: 'clients-images/Picture42.png' },
    { name: 'RGB Realco Group', logo: 'clients-images/Picture43.jpg' },
    { name: 'Golden Metal Aluminum Systems', logo: 'clients-images/Picture44.jpg' },
    { name: 'Indorama Ventures', logo: 'clients-images/Picture45.png' },
    { name: 'Etqan Consultancy', logo: 'clients-images/Picture46.png' },
    { name: 'G-Group', logo: 'clients-images/Picture47.png' },
    { name: 'ESG Eslam Elshirby Group', logo: 'clients-images/Picture48.png' },
  ];

  constructor(private readonly sanitizer: DomSanitizer) {}

  protected icon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconMarkup(name));
  }
}
