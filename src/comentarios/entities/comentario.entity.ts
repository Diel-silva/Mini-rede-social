import { Comentarios } from "@prisma/client";

export class ComentarioEntity implements Comentarios {
    id: number;
    usuario_id: number;
    postagem_id: number;
    mensagem_come: string;
    criacao_come: Date;
}
