import { Module } from '@nestjs/common';
import { CurtidasComentariosService } from './curtidas-comentarios.service';
import { CurtidasComentariosController } from './curtidas-comentarios.controller';
import { CurtidasComentariosRepository } from './repositories/curtidas-comentarios.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CurtidasComentariosController],
  providers: [CurtidasComentariosService, CurtidasComentariosRepository, PrismaService],
})
export class CurtidasComentariosModule {}
