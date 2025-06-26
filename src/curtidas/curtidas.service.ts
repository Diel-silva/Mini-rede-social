import { Injectable } from '@nestjs/common';
import { CreateCurtidaDto } from './dto/create-curtida.dto';
import { UpdateCurtidaDto } from './dto/update-curtida.dto';
import { CurtidasRepository } from './repositories/curtidas.repository';

@Injectable()
export class CurtidasService {
  constructor(private readonly repository: CurtidasRepository) {}

 async create(createCurtidaDto: CreateCurtidaDto) {
    return await this.repository.create(createCurtidaDto) ;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, createCurtidaDto: CreateCurtidaDto) {
    return await this.repository.update(id, createCurtidaDto	);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
