import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]',
  standalone: true
})
export class AppDestacarDirective {

  #el = inject(ElementRef);
  #renderer = inject(Renderer2);
  @HostListener('mouseenter') onMouseEnter() {
    this.#renderer.setStyle(this.#el.nativeElement,
      'background-color',
      'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.#renderer.removeStyle(this.#el.nativeElement,
      'background-color');
  }
}
