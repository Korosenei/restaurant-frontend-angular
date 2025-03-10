import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
