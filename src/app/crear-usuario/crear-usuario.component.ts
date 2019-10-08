import { OK } from '../model/httpstatus';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { CrearUsuarioService } from './crear-usuario.service';
import { UsuarioModel } from '../model/usuario.model';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[CrearUsuarioService]
})
export class CrearUsuarioComponent implements OnInit {

  private usuario: UsuarioModel;
  private isValido: boolean = true;
  private message: string = "";
  
  constructor(private crearUsuarioService: CrearUsuarioService, private router: Router) { 

    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.isValido = this.crearUsuarioService.validar(this.usuario);
    //alert("1");
    if(this.isValido){
      this.crearUsuarioService.saveOrUpdate(this.usuario).subscribe(res => {
        //alert("2");
        //alert("res.resposeCode "+res.responseCode);
        if(res.responseCode == OK){
          //alert("3A");
          this.router.navigate(['/usuarioComponent']);
        }else{
          //alert("3B");
          this.isValido = false;
          this.message = res.message;

        }

      });

    }else{
      this.message = "Los campos son aboligatorios";
    }
  }



}
