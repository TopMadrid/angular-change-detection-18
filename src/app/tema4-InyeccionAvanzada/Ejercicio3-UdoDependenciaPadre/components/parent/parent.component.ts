import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../services/logger-service.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss', 
  providers: [LoggerService]
})
export class ParentComponent {

}
