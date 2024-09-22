import { Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {

  ngZone = inject(NgZone);
  datoActualizado: string = '';

  simularEventoAsincrono(){
    //Evento asíncrono simulado
    setTimeout(() =>{
      console.log('Evento asíncrono completado fuera de ngZone'); 
      //Este dato nunca se actualiza en template por estar fuera del ngZone.run
      this.datoActualizado = "dentro del evento asincrono y fuera de NgZone";

      //Volver a la zona de Angular
      this.ngZone.run(() =>{
        //Actualizar la template
        //Otras operaciones
      this.datoActualizado = "dentro de ngZone";

        console.log("Actualización template dentro de ngZone"); 
      })
    }, 2000);
  }
}
