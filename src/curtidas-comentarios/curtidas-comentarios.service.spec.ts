import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasComentariosService } from './curtidas-comentarios.service';

describe('CurtidasComentariosService', () => {
  let service: CurtidasComentariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurtidasComentariosService],
    }).compile();

    service = module.get<CurtidasComentariosService>(CurtidasComentariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
