import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Who We Are', fragment: 'who-we-are' },
    { label: 'Manage It All', fragment: 'manage-it-all' },
    { label: 'Why zetalents', fragment: 'why-zetalents' },
    { label: 'Products', fragment: 'products' },
    { label: 'Clients', fragment: 'clients' },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
