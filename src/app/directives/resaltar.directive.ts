import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[resaltar]',
  standalone: true
})
export class ResaltarDirective implements OnInit {

  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  @Input() resaltar = false;

  ngOnInit(): void {
    if (this.resaltar) {
      this.#renderer.setStyle(
        this.#el.nativeElement,
        'background-color',
        'yellow'
      );
    }
  }

}
