import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from "../../../connexion/login/login.component";
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private modalService: NgbModal
  ) {}

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

  openLoginModal(){
    this.modalService.open(LoginComponent, {size: 'lg',
      backdrop: 'static', // Désactive la fermeture en cliquant en dehors
      keyboard: false    // Désactive la fermeture avec la touche 'Échap'
    });
  }

}
