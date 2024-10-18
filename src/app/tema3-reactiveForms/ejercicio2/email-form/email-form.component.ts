import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { correoUnico } from './async-validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {

  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  formulario1!: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    this.formulario1 = this.formBuilder.group({
      correoElectronico: ['', [Validators.required, Validators.pattern(this.emailPattern)], [correoUnico(this.http)]]
    })
  }

  onSubmit() {
    if (this.formulario1.valid) {
      const formData = this.formulario1.value;
      console.log(formData);
    }
  }
}
