import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { prefersReducedMotion } from './reveal';

/**
 * Pointer-driven 3D tilt with a soft spotlight that follows the cursor.
 * Skipped on touch devices and when the user prefers reduced motion.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class Tilt implements OnInit, OnDestroy {
  @Input('appTilt') max: number | string = 6;

  private readonly el = inject(ElementRef<HTMLElement>);
  private glow?: HTMLElement;
  private frame = 0;

  private readonly onMove = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const max = Number(this.max) || 6;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      node.style.transitionDelay = '0ms';
      node.style.transform =
        `perspective(900px) rotateX(${((0.5 - y) * max).toFixed(2)}deg) ` +
        `rotateY(${((x - 0.5) * max).toFixed(2)}deg) translateY(-4px)`;
      node.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      node.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
  };

  private readonly onLeave = () => {
    cancelAnimationFrame(this.frame);
    this.el.nativeElement.style.transform = '';
  };

  ngOnInit(): void {
    if (prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;
    const node = this.el.nativeElement;
    node.classList.add('tilt');
    this.glow = document.createElement('span');
    this.glow.className = 'tilt-glow';
    this.glow.setAttribute('aria-hidden', 'true');
    node.appendChild(this.glow);
    node.addEventListener('pointermove', this.onMove);
    node.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy(): void {
    const node = this.el.nativeElement;
    cancelAnimationFrame(this.frame);
    node.removeEventListener('pointermove', this.onMove);
    node.removeEventListener('pointerleave', this.onLeave);
    this.glow?.remove();
  }
}
