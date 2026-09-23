import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MODULES } from '../modules-data';
import { Reveal } from '../shared/reveal';
import { Tilt } from '../shared/tilt';
import { DecodeText } from '../shared/decode-text';
import { Spotlight } from '../shared/spotlight';
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

interface AiCapability {
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
  imports: [RouterLink, Reveal, Tilt, DecodeText, Spotlight, Icon, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly i18n = inject(I18nService);

  protected readonly modules = MODULES;
  protected readonly particles = Array.from({ length: 18 }, (_, i) => ({
    x: (i * 37) % 100,
    y: (i * 53 + 11) % 100,
    d: -((i * 7) % 11),
    t: 9 + (i % 6) * 2,
  }));

  protected readonly statIcons = ['calendar', 'globe', 'cpu', 'cloud'] as const;
  protected readonly heroStats = computed(() => this.i18n.list<StatItem>('home.stats'));
  protected readonly audienceCards = computed(() => this.i18n.list<AudienceCard>('home.audience'));
  protected readonly featureCards = computed(() => this.i18n.list<FeatureCard>('home.features'));
  protected readonly aiCapabilities = computed(() => this.i18n.list<AiCapability>('home.aiCapabilities'));

  protected readonly allClients: Client[] = [];

  protected moduleText(slug: string) {
    return this.i18n.raw<{ navTitle: string; badge: string; tagline: string }>(`modules.${slug}`);
  }

  protected readonly clientsRowOne: Client[] = [
    { name: 'Client 01', logo: 'new-clients-images/01.png' },
    { name: 'Client 02', logo: 'new-clients-images/02.jpg' },
    { name: 'Client 03', logo: 'new-clients-images/03.jpg' },
    { name: 'Client 04', logo: 'new-clients-images/04.jpg' },
    { name: 'Client 05', logo: 'new-clients-images/05.png' },
    { name: 'Client 06', logo: 'new-clients-images/06.png' },
    { name: 'Client 07', logo: 'new-clients-images/07.png' },
    { name: 'Client 08', logo: 'new-clients-images/08.jpg' },
    { name: 'Client 09', logo: 'new-clients-images/09.png' },
    { name: 'Client 10', logo: 'new-clients-images/10.png' },
    { name: 'Client 11', logo: 'new-clients-images/11.png' },
    { name: 'Client 12', logo: 'new-clients-images/12.png' },
    { name: 'Client 13', logo: 'new-clients-images/13.jpg' },
    { name: 'Client 14', logo: 'new-clients-images/14.png' },
    { name: 'Client 15', logo: 'new-clients-images/15.jpg' },
    { name: 'Client 16', logo: 'new-clients-images/16.png' },
    { name: 'Client 17', logo: 'new-clients-images/17.png' },
    { name: 'Client 18', logo: 'new-clients-images/18.jpg' },
    { name: 'Client 19', logo: 'new-clients-images/19.jpg' },
    { name: 'Client 20', logo: 'new-clients-images/20.png' },
    { name: 'Client 21', logo: 'new-clients-images/21.png' },
    { name: 'Client 22', logo: 'new-clients-images/22.jpg' },
  ];

  protected readonly clientsRowTwo: Client[] = [
    { name: 'Client 23', logo: 'new-clients-images/23.jpg' },
    { name: 'Client 24', logo: 'new-clients-images/24.jpg' },
    { name: 'Client 25', logo: 'new-clients-images/25.jpg' },
    { name: 'Client 26', logo: 'new-clients-images/26.jpg' },
    { name: 'Client 27', logo: 'new-clients-images/27.jpg' },
    { name: 'Client 28', logo: 'new-clients-images/28.jpg' },
    { name: 'Client 29', logo: 'new-clients-images/29.jpg' },
    { name: 'Client 30', logo: 'new-clients-images/30.jpg' },
    { name: 'Client 31', logo: 'new-clients-images/31.jpg' },
    { name: 'Client 32', logo: 'new-clients-images/32.jpg' },
    { name: 'Client 33', logo: 'new-clients-images/33.jpg' },
    { name: 'Client 34', logo: 'new-clients-images/34.jpg' },
    { name: 'Client 35', logo: 'new-clients-images/35.jpg' },
    { name: 'Client 36', logo: 'new-clients-images/36.jpg' },
    { name: 'Client 37', logo: 'new-clients-images/37.jpeg' },
    { name: 'Client 38', logo: 'new-clients-images/38.png' },
    { name: 'Client 39', logo: 'new-clients-images/39.png' },
    { name: 'Client 40', logo: 'new-clients-images/40.png' },
    { name: 'Client 41', logo: 'new-clients-images/41.jpg' },
    { name: 'Client 42', logo: 'new-clients-images/42.png' },
    { name: 'Client 43', logo: 'new-clients-images/43.png' },
  ];

  protected readonly clientRows: Client[][] = [];

  constructor() {
    this.allClients.push(...this.clientsRowOne, ...this.clientsRowTwo);
    const rowCount = 3;
    const perRow = Math.ceil(this.allClients.length / rowCount);
    for (let i = 0; i < rowCount; i++) {
      const row = this.allClients.slice(i * perRow, (i + 1) * perRow);
      // Duplicated so the marquee can loop seamlessly at -50%.
      this.clientRows.push([...row, ...row]);
    }
  }
}
