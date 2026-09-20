import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MODULES } from '../modules-data';
import { Reveal } from '../shared/reveal';
import { CountUp } from '../shared/count-up';
import { Icon } from '../shared/icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

interface StatItem {
  value: string;
  label: string;
}

interface AudienceCard {
  icon: string;
  title: string;
  description: string;
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
  imports: [RouterLink, Reveal, CountUp, Icon, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly i18n = inject(I18nService);

  protected readonly modules = MODULES;
  protected readonly activeSlug = signal(MODULES[0].slug);
  protected readonly activeModule = computed(() => MODULES.find((m) => m.slug === this.activeSlug()) ?? MODULES[0]);
  protected readonly activeText = computed(() =>
    this.i18n.raw<{ navTitle: string; badge: string; heroTitle: string; tagline: string; features: string[] }>(
      `modules.${this.activeSlug()}`,
    ),
  );
  protected readonly progress = computed(() => (this.activeModule().order / MODULES.length) * 100);

  protected readonly heroStats = computed(() => this.i18n.list<StatItem>('home.stats'));
  protected readonly audienceCards = computed(() => this.i18n.list<AudienceCard>('home.audience'));
  protected readonly featureCards = computed(() => this.i18n.list<FeatureCard>('home.features'));

  protected readonly allClients: Client[] = [];
  protected readonly query = signal('');
  protected readonly filteredClients = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q ? this.allClients.filter((c) => c.name.toLowerCase().includes(q)) : this.allClients;
  });

  protected moduleText(slug: string) {
    return this.i18n.raw<{ navTitle: string; badge: string }>(`modules.${slug}`);
  }

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

  protected readonly clientRows: Client[][] = [];

  constructor() {
    this.allClients.push(...this.clientsRowOne, ...this.clientsRowTwo);
    const rowCount = 5;
    const perRow = Math.ceil(this.allClients.length / rowCount);
    for (let i = 0; i < rowCount; i++) {
      this.clientRows.push(this.allClients.slice(i * perRow, (i + 1) * perRow));
    }
  }
}
