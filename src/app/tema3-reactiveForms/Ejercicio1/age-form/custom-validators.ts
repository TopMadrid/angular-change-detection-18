import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function edadMayorQue(minEdad: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const  edad = control.value;
        if (edad !==null && isNaN(edad)) {
            return { edadInvalida: true };
        }
        return edad < minEdad
            ? {edadMenorQuePermitida: true}
            : null;
    };
}