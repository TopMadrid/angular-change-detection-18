import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[estiloPersonalizado]',
  standalone: true
})
export class AppEstiloPersonalizadoDirective implements OnInit {

  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  @Input('estiloPersonalizado') estilos: any;

  ngOnInit() {
    if (this.estilos) {
      for (const estilo in this.estilos) { // Recorre los atributos del objeto de estilos pasado como argumento
        this.#renderer.setStyle(
          this.#el.nativeElement, // Elemento sobre el que se usa la directiva
          estilo, //atributo estilo
          this.estilos[estilo] //Valor del estilo
        );
      }
    }
  }
}
