import { Curtidas_Comentarios } from "@prisma/client";

export class CurtidasComentarioEntity implements Curtidas_Comentarios {
    id: number;
    usuario_id: number;
    comentario_id: number;
    criacao_cuco: Date;
}
