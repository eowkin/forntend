import { TestBed } from '@angular/core/testing';

import { CrearUsuarioService } from './crear-usuario.service';

describe('CrearUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearUsuarioService = TestBed.get(CrearUsuarioService);
    expect(service).toBeTruthy();
  });
});
