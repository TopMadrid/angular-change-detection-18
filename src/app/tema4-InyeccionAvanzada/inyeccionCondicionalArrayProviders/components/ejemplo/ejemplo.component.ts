import { Component, Inject, inject } from '@angular/core';
import { ILogger } from '../../interfaces/ilogger';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.scss'
})
export class EjemploComponent {

  constructor(@Inject('ILogger') private logger: ILogger) { }
  log() {
    this.logger.log('Mensaje desde EjemploComponent');
  }
}
