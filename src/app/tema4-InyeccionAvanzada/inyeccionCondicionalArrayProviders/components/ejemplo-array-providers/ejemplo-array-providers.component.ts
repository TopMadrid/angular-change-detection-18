import { Component } from '@angular/core';
import { EjemploComponent } from '../ejemplo/ejemplo.component';
import { RemoteService } from '../../services/remote.service';
import { ConsoleService } from '../../services/console.service';

@Component({
  selector: 'app-ejemplo-array-providers',
  standalone: true,
  imports: [EjemploComponent],
  templateUrl: './ejemplo-array-providers.component.html',
  styleUrl: './ejemplo-array-providers.component.scss',
  providers: [
    {
      provide: 'ILogger',
      useFactory: (environment: any) => {
        return environment.production
          ? new RemoteService()
          : new ConsoleService()
      },
      deps: ['ENVIRONMENT']
    },
    {
      provide: 'ENVIRONMENT', useValue: { production: true}
    }
  ]
})
export class EjemploArrayProvidersComponent {

}
