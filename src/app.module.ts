import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostagensModule } from './postagens/postagens.module';
import { CurtidasModule } from './curtidas/curtidas.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { CurtidasComentariosModule } from './curtidas-comentarios/curtidas-comentarios.module';

@Module({
  imports: [UsuariosModule, PostagensModule, CurtidasModule, ComentariosModule, CurtidasComentariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
