import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { ComentarioRepository } from './repositories/comentario.repository';
@Injectable()
export class ComentariosService {
  constructor(private readonly repository: ComentarioRepository) {}

 async create(createComentarioDto: CreateComentarioDto) {
    return await this.repository.create(createComentarioDto) ;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, createComentarioDto: CreateComentarioDto) {
    return await this.repository.update(id, createComentarioDto	);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
