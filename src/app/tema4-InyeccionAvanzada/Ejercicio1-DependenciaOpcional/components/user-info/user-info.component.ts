import { Component, inject, OnInit, Optional } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { LoggerService } from '../../services/logger-service.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  authService = inject(AuthService);
  @Optional() loggerService = inject(LoggerService);

  ngOnInit(): void {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn && this.loggerService) {
      this.loggerService.log('User is logged in.');
    }
  }
}
