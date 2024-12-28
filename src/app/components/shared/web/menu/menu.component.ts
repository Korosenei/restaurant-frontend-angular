import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
