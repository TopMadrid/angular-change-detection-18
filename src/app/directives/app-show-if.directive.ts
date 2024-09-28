import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]',
  standalone: true
})
export class AppShowIfDirective {
  
  // Directivas Personalizadas
  #templateRef = inject(TemplateRef<any>);
  #viewContainer = inject(ViewContainerRef);

@Input() set appShowIf(condition: boolean) {
  (condition)
  ? this.#viewContainer.createEmbeddedView(this.#templateRef) //mostramos el contenido de la vista
  : this.#viewContainer.clear(); // ocultamos el contenido de la vista
}
}







