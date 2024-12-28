import { Routes } from '@angular/router';
import { NavbarComponent } from './components/shared/web/landing/navbar/navbar.component';
import { HeaderComponent } from './components/shared/web/landing/header/header.component';
import { FooterComponent } from './components/shared/web/landing/footer/footer.component';
import { LandingComponent } from './components/shared/web/landing/landing.component';
import { BodyComponent } from './components/shared/web/landing/body/body.component';
import { PwdForgetedComponent } from './components/shared/pwd-forgeted/pwd-forgeted.component';
import { LoginComponent } from './components/shared/connexion/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'pwd-forgeted', component: PwdForgetedComponent },
  { path: 'home', component: LandingComponent },
  /* { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent }, */
];
