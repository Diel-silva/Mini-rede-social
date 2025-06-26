import { CreateComentarioDto } from "src/comentarios/dto/create-comentario.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ComentarioEntity } from "../entities/comentario.entity";

export class ComentarioRepository {
    constructor (private readonly prismarepository: PrismaService) {}

    async create (createComentarioDto: CreateComentarioDto): Promise <ComentarioEntity> {
        return await this.prismarepository.comentarios.create({
            data: createComentarioDto,
        })
    }
    async findAll(): Promise<ComentarioEntity[]> {
        return await this.prismarepository.comentarios.findMany({
          orderBy: {
            id: 'asc',
          },
        });
      }
    
      async findOne(id: number): Promise<ComentarioEntity | null> {
        return await this.prismarepository.comentarios.findFirst({
          where: {
            id,
          },
        });
      }
    
      async update(
        id: number,
        createComentarioDto: CreateComentarioDto,
      ): Promise<ComentarioEntity> {
        return await this.prismarepository.comentarios.update({
          where: {
            id,
          },
          data: createComentarioDto,
        });
      }
    
      async remove(id: number): Promise<ComentarioEntity> {
        return await this.prismarepository.comentarios.delete({
          where: {
            id,
          },
        });
      }
}