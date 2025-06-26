import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateCurtidaDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela USUARIOS',})
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela POSTAGEM',})
    postagem_id: number;
}
