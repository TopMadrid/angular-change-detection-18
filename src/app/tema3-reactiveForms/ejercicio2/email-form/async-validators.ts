import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { firstValueFrom, map } from "rxjs";

export function correoUnico(http: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
        const correo = control.value;
        // Simular una solicitud HTTP para verificar si el correo ya está registrado
        return firstValueFrom( //Devuelve una promesa sin que el Observable se complete.
            http.get<any>('https://dummyjson.com/http/200/existe', { params: { correo } })
                .pipe(
                    map((response) => {
                        return response.message === 'existe'
                            ? { correoNoDisponible: true }
                            : null;
                    })
                )
        )

    }
}