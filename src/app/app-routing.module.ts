import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
      {path:'', redirectTo: '/usuarioComponent', pathMatch: 'full'},
      {path:'appComponent', component: AppComponent},
      {path:'usuarioComponent', component: UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
