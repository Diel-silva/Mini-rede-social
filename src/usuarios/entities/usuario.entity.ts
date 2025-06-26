import { Usuarios } from '@prisma/client';

export class UsuarioEntity implements Usuarios {
  id: number;
  nome_usua: string;
  email_usua: string;
  senha_usua: string;
  criacao_usua: Date;
}
