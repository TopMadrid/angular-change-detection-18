import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[validacionEnTiempoReal]',
  standalone: true
})
export class ValidacionEnTiempoRealDirective {

  #ele = inject(ElementRef);
  #renderer = inject(Renderer2);

  @HostListener('input') onInput() {
    const inputElement = this.#ele.nativeElement;
    if (inputElement.validity.valid) {
      this.#renderer.setStyle(inputElement, 'background-color', 'lightgreen');
    } else {
      this.#renderer.setStyle(inputElement, 'background-color', 'mistyrose');
    }
  }
}

