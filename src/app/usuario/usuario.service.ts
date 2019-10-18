import { UsuarioModel } from './../model/usuario.model';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private listaUsuarios: Array<UsuarioModel>;
  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<UsuarioModel[]>{
   return  this.http.get<UsuarioModel[]>("http://localhost:8080/getAllUsuarios")
  }

   public eliminarUsuario(usuarioModel :UsuarioModel): void{
      this.http.post("http://localhost:8080/deleteUsuario", JSON.stringify(usuarioModel)).subscribe();
  }

/*
  public getUsuarios(): Array<UsuarioModel>{
    this.http.get("http://localhost:8080/getAllUsuarios").subscribe(res => {
      this.listaUsuarios = res as UsuarioModel[];
      console.log(this.listaUsuarios);
    });

    return this.listaUsuarios;
  }*/
}
