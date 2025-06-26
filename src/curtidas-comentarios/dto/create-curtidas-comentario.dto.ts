import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCurtidasComentarioDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela USUARIOS',})
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela COMENTARIOS',})
    comentario_id: number;
}
