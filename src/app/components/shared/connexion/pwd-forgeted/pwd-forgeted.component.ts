import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pwd-forgeted',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pwd-forgeted.component.html',
  styleUrl: './pwd-forgeted.component.scss'
})
export class PwdForgetedComponent {

  constructor(
      private router: Router,
      public activeModal: NgbActiveModal
    ) { }

  onConnexionClick() {
    this.router.navigate(['/login']);
  }

  Close(): void {
    this.activeModal.close();
  }
}
