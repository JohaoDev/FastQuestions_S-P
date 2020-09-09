import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { EncuestasComponent } from './encuestas/encuestas.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  // {
  //   path: 'persona',
  //   loadChildren: () =>
  //     import('./persona/persona.module').then((m) => m.PersonaModule),
  // },
  { path: 'encuestas', component: EncuestasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
