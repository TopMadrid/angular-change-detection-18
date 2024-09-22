import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContadorComponent {
cd = inject(ChangeDetectorRef);
contador:number = 0;
contadorSignal= signal<number>(0);

comenzarContador(){
  setInterval(() =>{
    this.contador++;
    this.cd.markForCheck();
  }, 1000);
}
comenzarContadorSignal(){
  setInterval(() =>{
    this.contadorSignal.update(old => old+1);
  }, 1000);
}
}
