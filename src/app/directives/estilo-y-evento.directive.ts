import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[estiloYEvento]',
  standalone: true
})
export class EstiloYEventoDirective {

  @HostBinding('style.backgroundColor') backColor!: string;
  @HostBinding('style.cursor') cursor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backColor = 'lightblue';
    this.cursor = 'not-allowed';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backColor = 'unset';
    this.cursor = 'unset';
  }
}
