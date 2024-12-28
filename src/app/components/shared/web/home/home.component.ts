import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }
  
    onLogin() {
      this.router.navigate(['/login']);
    }
}
