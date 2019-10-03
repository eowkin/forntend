import { UsuarioService } from './usuario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]

})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

}
