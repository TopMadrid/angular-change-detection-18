import { Component, inject, Input } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { OperacionesAsincronasComponent } from './operaciones-asincronas/operaciones-asincronas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PruebasDirectivasPersonalizadasComponent } from './pruebas-directivas-personalizadas/pruebas-directivas-personalizadas.component';
import { Ejercicio1Component } from './tema2-directivas/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './tema2-directivas/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './tema2-directivas/ejercicio3/ejercicio3.component';
import { AgeFormComponent } from './tema3-reactiveForms/Ejercicio1/age-form/age-form.component';
import { EmailFormComponent } from './tema3-reactiveForms/ejercicio2/email-form/email-form.component';
import { HttpClient } from '@angular/common/http';
import { CountryFormComponent } from './tema3-reactiveForms/Ejercicio3/country-form/country-form.component';
import { EjemploArrayProvidersComponent } from './tema4-InyeccionAvanzada/inyeccionCondicionalArrayProviders/components/ejemplo-array-providers/ejemplo-array-providers.component';
import { UserInfoComponent } from './tema4-InyeccionAvanzada/Ejercicio1-DependenciaOpcional/components/user-info/user-info.component';
import { ChildComponent } from './tema4-InyeccionAvanzada/Ejercicio2-UsoDependenciaLocal/components/child/child.component';
import { ParentComponent } from './tema4-InyeccionAvanzada/Ejercicio3-UdoDependenciaPadre/components/parent/parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorComponent, OperacionesAsincronasComponent,
    EventosComponent, PruebasDirectivasPersonalizadasComponent,
    Ejercicio1Component, Ejercicio2Component,
    Ejercicio3Component, AgeFormComponent,
    EmailFormComponent, CountryFormComponent, EjemploArrayProvidersComponent,
    UserInfoComponent, ChildComponent, ParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  http = inject(HttpClient);
  title = 'temas Curso Angular 18 Avanzado';
}
