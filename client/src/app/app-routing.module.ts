import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  // administration
  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },

  // encuestador
  {
    path: 'encuestador',
    loadChildren: () =>
      import('./encuestador/encuestador.module').then(
        (m) => m.EncuestadorModule
      ),
  },

  //encuestado
  {
    path: 'encuestado',
    loadChildren: () =>
      import('./encuestado/encuestado.module').then((m) => m.EncuestadoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
