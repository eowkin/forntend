import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UsuarioModel } from './../model/usuario.model';
import { UsuarioService } from './usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]

})
export class UsuarioComponent implements OnInit {
  private listaUsuarios: Array<UsuarioModel>;
  constructor(private usuarioService:UsuarioService, private router:Router ) { }

  ngOnInit() {
     this.cargarUsuarios(); 
  }

  private cargarUsuarios():void {
      this.usuarioService.getUsuarios().subscribe(res => {
        this.listaUsuarios = res
      });
  }

  private consultarEditarUsuario(usuario: UsuarioModel):void{
    //alert(usuario);
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['/crearUsuarioComponent']);

  }

  private eliminarUsuario(usuario: UsuarioModel):void{
    alert(usuario);
    this.usuarioService.eliminarUsuario(usuario);
    this.router.navigate(['/usuarioComponent']);
  }

}
