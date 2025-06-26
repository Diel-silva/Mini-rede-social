import { Module } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CurtidasController } from './curtidas.controller';
import { CurtidasRepository } from './repositories/curtidas.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CurtidasController],
  providers: [CurtidasService,CurtidasRepository, PrismaService ],
})
export class CurtidasModule {}
