import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateComentarioDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela USUARIOS',})
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela POSTAGEM',})
    postagem_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255, {
    message: 'O comentario pode ter no máximo 255 caracteres',})
    @ApiProperty({ description: 'Comentario', maxLength: 255 })
    mensagem_come: string;
}
