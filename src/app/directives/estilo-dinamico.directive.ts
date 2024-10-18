import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[estiloDinamico]',
  standalone: true
})
export class EstiloDinamicoDirective {

  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  @HostListener('mouseenter') onMouseEnter() {
    this.#renderer.setStyle(this.#el.nativeElement, 'background-color', 'yellow');
    this.#renderer.setStyle(this.#el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.#renderer.removeStyle(this.#el.nativeElement, 'background-color');
    this.#renderer.removeStyle(this.#el.nativeElement, 'cursor');
  }

}
