import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestadorComponent } from './encuestador.component';
import { NuevaEncuestaComponent } from './nueva-encuesta/nueva-encuesta.component';

const routes: Routes = [
  { path: '', component: EncuestadorComponent },
  { path: 'nueva-encuesta', component: NuevaEncuestaComponent },
  // {path: 'encuestas', loadChildren: () =>import('./encuestas/encuestas.module').then(m =>m.EncuestasModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestadorRoutingModule {}
