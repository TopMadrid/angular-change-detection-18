import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[clickModificador]',
  standalone: true
})
export class ClickModificadorDirective {

  @HostBinding('style.backgroundColor') backColor!: string;
  @HostBinding('style.cursor') cursor!: string;
  @HostBinding('attr.disabled') disabled!: boolean;

  @HostListener('click') onClick() {
    this.backColor = 'lightblue';
    this.cursor = 'not-allowed';
    this.disabled = true;
  }
}
