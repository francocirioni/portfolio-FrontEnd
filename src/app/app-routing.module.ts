import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educa/editeducacion.component';
import { NeweducacionComponent } from './componentes/educa/neweducacion.component';
import { EditExperienciaComponent } from './componentes/exp/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }