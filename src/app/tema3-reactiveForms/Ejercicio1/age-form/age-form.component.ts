import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { edadMayorQue } from './custom-validators';
import { AgeFormData } from './age-form.interface';


@Component({
  selector: 'app-age-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-form.component.html',
  styleUrl: './age-form.component.scss'
})
export class AgeFormComponent {
  formBuilder = inject(FormBuilder);
  
  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, edadMayorQue(18)]],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData: AgeFormData = this.formulario.value;
      console.log(formData);
    }
  }
}
