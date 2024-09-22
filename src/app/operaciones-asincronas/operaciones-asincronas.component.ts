import { Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-operaciones-asincronas',
  standalone: true,
  imports: [],
  templateUrl: './operaciones-asincronas.component.html',
  styleUrl: './operaciones-asincronas.component.scss'
})
export class OperacionesAsincronasComponent {

  ngZone = inject(NgZone);

  datoActualizado: number = 0;

  ejecutarOperacionFueraDeLaZona(){

    //Salir de la NgZone
    this.ngZone.runOutsideAngular(() =>{
      //Simular una operación intensiva en CPU
      for (let i=0; i< 100000; i++) {
        console.log(i);
        this.datoActualizado = i;
      }

      console.log('Operación fuera de ngZone completada');

      //Volver a la zona NgZone
      this.ngZone.run (() =>{
        //Aquí es para actualizar la interfaz de usuario 
        // o realizar otras operaciones dentro la NgZone.
        this.datoActualizado = Math.floor(Math.random() * 10);
        console.log("Estoy dentro de la NgZone para Actualización de la template");
      })

    })
  }

}
