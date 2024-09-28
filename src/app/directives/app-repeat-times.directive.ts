import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]',
  standalone: true
})
export class AppRepeatTimesDirective {


  // Logica avanzada en directivas estructurales
  #templateRef = inject(TemplateRef<any>);
  #viewContainer = inject(ViewContainerRef);

  @Input() set appRepeatTimes(times: number){
    this.#viewContainer.clear();

    for (let i = 0; i < times; i ++){
      this.#viewContainer.createEmbeddedView(this.#templateRef); //Crea instancias de la vista. 
                                                                 //La vista es el contenido del div donde actua la directiva
    }
  }

}
