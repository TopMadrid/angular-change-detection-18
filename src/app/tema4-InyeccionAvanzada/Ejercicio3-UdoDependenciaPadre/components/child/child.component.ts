import { Component, inject, SkipSelf } from '@angular/core';
import { LoggerService } from '../services/logger-service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @SkipSelf() private loggerService = inject(LoggerService);
  ngOnInit(): void {
    this.loggerService.log('Child Component initialized using parent service instance.');
  }

}
