import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { prefersReducedMotion } from './reveal';

/**
 * Animates a stat value (e.g. "2016", "100%") counting up from 0 the first
 * time it scrolls into view. Non-numeric values are left untouched.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUp implements OnInit {
  @Input('appCountUp') value = '';

  private readonly el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const node = this.el.nativeElement;
    const match = this.value.match(/^(\D*)([\d,]+)(\D*)$/);

    if (!match || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      node.textContent = this.value;
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/,/g, ''), 10);
    node.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            obs.unobserve(node);
            animateCount(node, prefix, target, suffix);
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
  }
}

function animateCount(node: HTMLElement, prefix: string, target: number, suffix: string): void {
  const duration = 1100;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    node.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
