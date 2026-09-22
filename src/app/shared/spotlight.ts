import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { prefersReducedMotion } from './reveal';

/**
 * Feeds the pointer position into `--sx` / `--sy` (percent of the element) so a
 * background layer can follow the cursor, and toggles `.is-lit` while the
 * pointer is over the element. Eased with rAF so the light glides, not jumps.
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
})
export class Spotlight implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private frame = 0;
  private tx = 50;
  private ty = 40;
  private x = 50;
  private y = 40;

  private readonly tick = () => {
    this.x += (this.tx - this.x) * 0.12;
    this.y += (this.ty - this.y) * 0.12;
    const node = this.el.nativeElement;
    node.style.setProperty('--sx', `${this.x.toFixed(2)}%`);
    node.style.setProperty('--sy', `${this.y.toFixed(2)}%`);
    this.frame =
      Math.abs(this.tx - this.x) + Math.abs(this.ty - this.y) > 0.05 ? requestAnimationFrame(this.tick) : 0;
  };

  private readonly onMove = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.tx = ((e.clientX - rect.left) / rect.width) * 100;
    this.ty = ((e.clientY - rect.top) / rect.height) * 100;
    this.el.nativeElement.classList.add('is-lit');
    if (!this.frame) this.frame = requestAnimationFrame(this.tick);
  };

  private readonly onLeave = () => this.el.nativeElement.classList.remove('is-lit');

  ngOnInit(): void {
    if (prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;
    const node = this.el.nativeElement;
    node.addEventListener('pointermove', this.onMove);
    node.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy(): void {
    const node = this.el.nativeElement;
    cancelAnimationFrame(this.frame);
    node.removeEventListener('pointermove', this.onMove);
    node.removeEventListener('pointerleave', this.onLeave);
  }
}
