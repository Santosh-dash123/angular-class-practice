import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {}

  EMSLogout() {
    this.authservice.logout();
    alert('Logout Successfully!');
    this.router.navigate(['']);
  }
}
