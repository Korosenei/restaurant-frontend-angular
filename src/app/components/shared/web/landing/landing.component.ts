import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(private router: Router) { }
  
    onLogin() {
      this.router.navigate(['/login']);
    }
}
