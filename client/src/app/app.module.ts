import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MenuComponent } from './menu/menu.component';
import { MenuEncuestadoComponent } from './menu-encuestado/menu-encuestado.component';
import { MenuEncuestadorComponent } from './menu-encuestador/menu-encuestador.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdministrationComponent } from './administration/administration.component';
import { EncuestadoComponent } from './encuestado/encuestado.component';
import { EncuestadorComponent } from './encuestador/encuestador.component';
// import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // PersonaComponent,
    MenuComponent,
    MenuEncuestadorComponent,
    EncuestadorComponent,
    HomeComponent,
    RegistrationComponent,
    EncuestadoComponent,
    MenuEncuestadoComponent,
    AdministrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
