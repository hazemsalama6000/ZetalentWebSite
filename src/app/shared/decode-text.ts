import { Directive, ElementRef, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { prefersReducedMotion } from './reveal';

/**
 * Types a label out as a "decoding" effect: every character starts as noise
 * and locks into place left to right. Re-runs when the text changes (e.g. on
 * language switch). Noise is drawn from the text's own characters so it works
 * in any script; the final text is always exposed to assistive tech.
 */
@Directive({
  selector: '[appDecode]',
  standalone: true,
})
export class DecodeText implements OnChanges, OnDestroy {
  @Input('appDecode') text = '';
  @Input() decodeDelay = 500;

  private readonly el = inject(ElementRef<HTMLElement>);
  private timer?: ReturnType<typeof setTimeout>;
  private frame = 0;

  ngOnChanges(): void {
    this.stop();
    const node = this.el.nativeElement;
    const target = this.text;
    node.setAttribute('aria-label', target);

    if (prefersReducedMotion() || !target) {
      node.textContent = target;
      return;
    }

    const pool = [...new Set(target.replace(/\s/g, ''))];
    const chars = [...target];
    const perChar = 45; // ms before the next character locks
    node.textContent = chars.map((c) => (c === ' ' ? ' ' : this.noise(pool))).join('');

    this.timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const locked = Math.floor((now - start) / perChar);
        node.textContent = chars
          .map((c, i) => (c === ' ' || i < locked ? c : this.noise(pool)))
          .join('');
        this.frame = locked < chars.length ? requestAnimationFrame(tick) : 0;
      };
      this.frame = requestAnimationFrame(tick);
    }, this.decodeDelay);
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private noise(pool: string[]): string {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  private stop(): void {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.frame);
  }
}
