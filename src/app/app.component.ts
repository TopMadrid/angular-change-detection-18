import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { OperacionesAsincronasComponent } from './operaciones-asincronas/operaciones-asincronas.component';
import { EventosComponent } from './eventos/eventos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, OperacionesAsincronasComponent, EventosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tema1';
}
