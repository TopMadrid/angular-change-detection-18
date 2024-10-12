import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.scss'
})
export class CountryFormComponent {
  formulario2!: FormGroup;
  formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.formulario2 = this.formBuilder.group({
      pais: ['', Validators.required],
      codigoPostal: [''],
    });

   

    // Cuando cambia el valor de pais: 
    this.formulario2.get('pais')?.valueChanges.subscribe((pais) => {
      const codigoPostalControl = this.formulario2.get('codigoPostal') as FormControl;

      //solo si 'pais' es igual a 'Estados Unidos'
      if (pais === 'Estados Unidos') {
        
         //Aplicar validación requerida al campo 'codigoPostal' 
        codigoPostalControl.setValidators([Validators.required]); //Se añade validación dinamicamente
      } else {
        codigoPostalControl.clearValidators(); //Se quita validación dinamicamente
      }
      codigoPostalControl.updateValueAndValidity(); //Se actualiza validación dinamicamente
    });
  }

  onSubmit() {
    if (this.formulario2.valid) {
      const formData = this.formulario2.value;
      console.log(formData);
    }
  }

}



