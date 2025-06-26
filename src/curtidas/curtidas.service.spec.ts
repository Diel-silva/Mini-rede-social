import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasService } from './curtidas.service';

describe('CurtidasService', () => {
  let service: CurtidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurtidasService],
    }).compile();

    service = module.get<CurtidasService>(CurtidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
