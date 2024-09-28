import { Component, Input } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { OperacionesAsincronasComponent } from './operaciones-asincronas/operaciones-asincronas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PruebasDirectivasPersonalizadasComponent } from './pruebas-directivas-personalizadas/pruebas-directivas-personalizadas.component';
import { Ejercicio1Component } from './tema2-directivas/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './tema2-directivas/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './tema2-directivas/ejercicio3/ejercicio3.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ContadorComponent, OperacionesAsincronasComponent, 
    EventosComponent, PruebasDirectivasPersonalizadasComponent, 
  Ejercicio1Component, Ejercicio2Component,
  Ejercicio3Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temas Curso Angular 18 Avanzado';

  
}
