import { Postagens } from "@prisma/client";

export class PostagenEntity implements Postagens {
    id: number;
    usuario_id: number;
    mensagem_post: string;
    criacao_post: Date;
}
