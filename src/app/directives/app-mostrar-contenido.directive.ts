import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mostrarContenido]',
  standalone: true
})
export class AppMostrarContenidoDirective {
  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  @HostListener('click') onClick() {
    const contenidoAdicional = this.#el.nativeElement.querySelector('.contenido-adicional');
    contenidoAdicional.style.display =
      contenidoAdicional.style.display === 'none'
        ? 'block'
        : 'none';
  }
}
