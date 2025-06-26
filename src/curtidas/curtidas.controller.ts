import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CreateCurtidaDto } from './dto/create-curtida.dto';
import { UpdateCurtidaDto } from './dto/update-curtida.dto';

@Controller('curtidas')
export class CurtidasController {
  constructor(private readonly curtidasService: CurtidasService) {}

  @Post()
  create(@Body() createCurtidaDto: CreateCurtidaDto) {
    return this.curtidasService.create(createCurtidaDto);
  }

  @Get()
  findAll() {
    return this.curtidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curtidasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createCurtidaDto: CreateCurtidaDto) {
    return this.curtidasService.update(+id, createCurtidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curtidasService.remove(+id);
  }
}
