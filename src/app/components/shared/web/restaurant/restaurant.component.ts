import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {

}
