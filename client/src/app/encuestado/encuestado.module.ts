import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestadoRoutingModule } from './encuestado-routing.module';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';

@NgModule({
  declarations: [SurveyDetailsComponent],
  imports: [CommonModule, EncuestadoRoutingModule],
})
export class EncuestadoModule {}
