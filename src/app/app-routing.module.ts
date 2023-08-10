import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasListComponent } from './noticias/noticias-list/noticias-list.component';
import { HomeComponent } from './home/home.component';
import { NoticiasEditComponent } from './noticias/noticias-edit/noticias-edit.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias/noticias.component';

const routes: Routes = [
  { path: 'list', component: NoticiasListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: NoticiasEditComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
