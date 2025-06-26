import { Curtidas } from "@prisma/client";

export class CurtidaEntity implements Curtidas {
    id: number;
    usuario_id: number;
    postagem_id: number;
    criacao_curt: Date;
}
