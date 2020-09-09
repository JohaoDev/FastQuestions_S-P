import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestadorRoutingModule } from './encuestador-routing.module';
import { NuevaEncuestaComponent } from './nueva-encuesta/nueva-encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NuevaEncuestaComponent],
  imports: [
    CommonModule,
    EncuestadorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EncuestadorModule {}
