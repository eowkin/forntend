import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
      {path:'', redirectTo: '/usuarioComponent', pathMatch: 'full'},
      {path:'appComponent', component: AppComponent},
      {path:'usuarioComponent', component: UsuarioComponent},
      {path:'crearUsuarioComponent', component: CrearUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
