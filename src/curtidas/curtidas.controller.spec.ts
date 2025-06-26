import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasController } from './curtidas.controller';
import { CurtidasService } from './curtidas.service';

describe('CurtidasController', () => {
  let controller: CurtidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurtidasController],
      providers: [CurtidasService],
    }).compile();

    controller = module.get<CurtidasController>(CurtidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
