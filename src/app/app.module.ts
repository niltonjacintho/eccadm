import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoticiasListComponent } from './noticias/noticias-list/noticias-list.component';
import { NoticiasEditComponent } from './noticias/noticias-edit/noticias-edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// PrimeNg
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// fim PrimeNg

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoticiasListComponent,
    NoticiasEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
