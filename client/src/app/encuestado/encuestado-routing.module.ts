import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestadoComponent } from './encuestado.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';

const routes: Routes = [
  { path: '', component: EncuestadoComponent },
  {
    path: 'survey-details',
    component: SurveyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestadoRoutingModule {}
