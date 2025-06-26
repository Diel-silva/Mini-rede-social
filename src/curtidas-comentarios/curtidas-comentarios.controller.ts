import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurtidasComentariosService } from './curtidas-comentarios.service';
import { CreateCurtidasComentarioDto } from './dto/create-curtidas-comentario.dto';
import { UpdateCurtidasComentarioDto } from './dto/update-curtidas-comentario.dto';

@Controller('curtidas-comentarios')
export class CurtidasComentariosController {
  constructor(private readonly curtidasComentariosService: CurtidasComentariosService) {}

  @Post()
  create(@Body() createCurtidasComentarioDto: CreateCurtidasComentarioDto) {
    return this.curtidasComentariosService.create(createCurtidasComentarioDto);
  }

  @Get()
  findAll() {
    return this.curtidasComentariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curtidasComentariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurtidasComentarioDto: UpdateCurtidasComentarioDto) {
    return this.curtidasComentariosService.update(+id, updateCurtidasComentarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curtidasComentariosService.remove(+id);
  }
}
