import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { UsuarioModel } from './../model/usuario.model';
import { RestResponse } from '../model/restResponse.model';


@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor(private http: HttpClient) { }


  /**
   * Metodo que valida campos obligatorios
   * @param usuarioModel 
   * 
   */
  public validar(usuarioModel :UsuarioModel):boolean{
    let isValid = true;

    if(!usuarioModel.primerNombre){
      isValid = false;
    }

    if(!usuarioModel.primerApellido){
      isValid = false;
    }

    if(!usuarioModel.telefono){
      isValid = false;
    }

    return isValid;
  }


  public saveOrUpdate(usuarioModel :UsuarioModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify(usuarioModel))
  }
}
