import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    return await this.prismaRepository.usuarios.create({
      data: createUsuarioDto,
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.prismaRepository.usuarios.findMany({
      orderBy: {
        nome_usua: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<UsuarioEntity | null> {
    return await this.prismaRepository.usuarios.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    return await this.prismaRepository.usuarios.update({
      where: {
        id,
      },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number): Promise<UsuarioEntity> {
    return await this.prismaRepository.usuarios.delete({
      where: {
        id,
      },
    });
  }
}
