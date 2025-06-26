import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsString, MaxLength, } from "class-validator";

export class CreatePostagenDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia o id da tabela USUARIOS',})
    usuario_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255, {
      message: 'A postagen pode ter no máximo 255 caracteres',
    })
    @ApiProperty({ description: 'Postagens', maxLength: 255 })
    mensagem_post: string;
}
