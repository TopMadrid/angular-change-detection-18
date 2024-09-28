import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[miAtributo]',
  standalone: true
})
export class MiAtributoDirective implements OnInit {

  #el = inject(ElementRef);
  #renderer = inject(Renderer2);
  @Input() miAtributo!: string;

  ngOnInit() {
    this.#renderer.setAttribute(
      this.#el.nativeElement, // Pasamos elemento html nativo
      'data-mi-atributo', // Nombre de atributo
      this.miAtributo // Pasamos el valor del atributo
    );
  }
}
