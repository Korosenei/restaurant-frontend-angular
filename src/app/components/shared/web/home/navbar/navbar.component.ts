import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  onHomeClick() {
    this.router.navigate(['/home']);
  }
  onMenuClick() {
    this.router.navigate(['/menu']);
  }
  onRestoClick() {
    this.router.navigate(['/resto']);
  }
  onContactClick() {
    this.router.navigate(['/contact']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
}
