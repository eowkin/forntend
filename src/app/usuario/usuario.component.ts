import { UsuarioModel } from './../model/usuario.model';
import { UsuarioService } from './usuario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]

})
export class UsuarioComponent implements OnInit {
  private listaUsuarios: Array<UsuarioModel>;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
     this.cargarUsuarios(); 
  }

  private cargarUsuarios():void {
      this.usuarioService.getUsuarios().subscribe(res => {
        this.listaUsuarios = res
      });
  }
}
