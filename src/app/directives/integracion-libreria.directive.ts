import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[integracionLibreria]',
  standalone: true
})
	
export class IntegracionLibreriaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Agregar atributos o eventos de la librería aquí
    this.renderer.setAttribute(
      this.el.nativeElement,
      'data-library-attr',
      'true'
    );
    this.renderer.listen(this.el.nativeElement, 'click', () => {
      console.log('Elemento clickado por la librería');
    });
  }
}
