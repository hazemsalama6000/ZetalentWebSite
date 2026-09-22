import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { prefersReducedMotion } from './reveal';

/**
 * Moves an element at a fraction of the scroll speed while it is on screen.
 * `appParallax` is the speed (e.g. 0.08 drifts 8% of the scroll distance).
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class Parallax implements OnInit, OnDestroy {
  @Input('appParallax') speed: number | string = 0.08;

  private readonly el = inject(ElementRef<HTMLElement>);
  private frame = 0;
  private visible = true;
  private observer?: IntersectionObserver;

  private readonly update = () => {
    this.frame = 0;
    if (!this.visible) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -(Number(this.speed) || 0.08);
    this.el.nativeElement.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
  };

  private readonly onScroll = () => {
    if (!this.frame) this.frame = requestAnimationFrame(this.update);
  };

  ngOnInit(): void {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(([entry]) => (this.visible = entry.isIntersecting));
    this.observer.observe(this.el.nativeElement);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.update();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
    window.removeEventListener('scroll', this.onScroll);
    this.observer?.disconnect();
  }
}
