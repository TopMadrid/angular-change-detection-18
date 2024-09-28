import { Component, Input } from '@angular/core';
import { AppShowIfDirective } from '../directives/app-show-if.directive';
import { AppRepeatTimesDirective } from '../directives/app-repeat-times.directive';
import { CommonModule } from '@angular/common';
import { MiAtributoDirective } from '../directives/mi-atributo.directive';
import { EstiloDinamicoDirective } from '../directives/estilo-dinamico.directive';
import { ResaltarDirective } from '../directives/resaltar.directive';
import { ClickModificadorDirective } from '../directives/click-modificador.directive';
import { EstiloYEventoDirective } from '../directives/estilo-y-evento.directive';

@Component({
  selector: 'app-pruebas-directivas-personalizadas',
  standalone: true,
  imports: [ 
    CommonModule, 
    AppShowIfDirective, 
    AppRepeatTimesDirective, 
    MiAtributoDirective,
    EstiloDinamicoDirective,
    ResaltarDirective,
    ClickModificadorDirective,
    EstiloYEventoDirective
  ],
  templateUrl: './pruebas-directivas-personalizadas.component.html',
  styleUrl: './pruebas-directivas-personalizadas.component.scss'
})
export class PruebasDirectivasPersonalizadasComponent {
  showContent: boolean = false;

  tareas = [
    {descripcion: 'Tarea1'},
    {descripcion: 'Tarea2'},
    {descripcion: 'Tarea3'}
  ]

items = [
  {nombre: "Elemento A", destacar: true},
  {nombre: "Elemento B", destacar: false},
  {nombre: "Elemento C", destacar: true}
]

  toggleContent() {
    this.showContent = !this.showContent;
  }



}
