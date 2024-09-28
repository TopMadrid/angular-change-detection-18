// Tema 2 - Ejercicio 1 Directiva de Atributo en componente

import { Component } from '@angular/core';
import { AppDestacarDirective } from '../../directives/app-destacar.directive';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [AppDestacarDirective],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.scss'
})
export class Ejercicio1Component {

}
