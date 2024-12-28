import { Routes } from '@angular/router';
import { NavbarComponent } from './components/shared/web/home/navbar/navbar.component';
import { HeaderComponent } from './components/shared/web/home/header/header.component';
import { FooterComponent } from './components/shared/web/home/footer/footer.component';
import { BodyComponent } from './components/shared/web/home/body/body.component';
import { PwdForgetedComponent } from './components/shared/connexion/pwd-forgeted/pwd-forgeted.component';
import { LoginComponent } from './components/shared/connexion/login/login.component';
import { HomeComponent } from './components/shared/web/home/home.component';
import { RestaurantComponent } from './components/shared/web/restaurant/restaurant.component';
import { ContactComponent } from './components/shared/web/contact/contact.component';
import { MenuComponent } from './components/shared/web/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'pwd-forgeted', component: PwdForgetedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'resto', component: RestaurantComponent },
  { path: 'contact', component: ContactComponent },
  /* { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent }, */
];
