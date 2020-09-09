import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { EncuestasComponent } from './encuestas/encuestas.component';

@NgModule({
  declarations: [EncuestasComponent],
  imports: [CommonModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
