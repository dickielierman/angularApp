import { Component} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  constructor(private authService: AuthService) {}

  loggedIn = this.authService.loggedIn
  
  onLogout() {
    this.authService.logout()
  }
}
