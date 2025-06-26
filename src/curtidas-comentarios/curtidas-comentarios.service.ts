import { Injectable } from '@nestjs/common';
import { CreateCurtidasComentarioDto } from './dto/create-curtidas-comentario.dto';
import { CurtidasComentariosRepository } from './repositories/curtidas-comentarios.repository';
import { UpdateCurtidasComentarioDto } from './dto/update-curtidas-comentario.dto';

@Injectable()
export class CurtidasComentariosService {
  constructor(private readonly repository: CurtidasComentariosRepository) {}

 async create(createCurtidasComentarioDto: CreateCurtidasComentarioDto) {
    return await this.repository.create(createCurtidasComentarioDto) ;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCurtidasComentarioDto: UpdateCurtidasComentarioDto) {
    return await this.repository.update(id, updateCurtidasComentarioDto	);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
