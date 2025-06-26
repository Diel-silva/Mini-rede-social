import { create } from "domain"
import { PrismaService } from "src/prisma/prisma.service"
import { CreateCurtidasComentarioDto } from "../dto/create-curtidas-comentario.dto"
import { CurtidasComentarioEntity } from "../entities/curtidas-comentario.entity"
import { UpdateCurtidasComentarioDto } from "../dto/update-curtidas-comentario.dto"

export class CurtidasComentariosRepository {
    constructor (private readonly prismarepository: PrismaService) {}

    async create (CreateCurtidasComentarioDto: CreateCurtidasComentarioDto): Promise <CurtidasComentarioEntity> {
        return await this.prismarepository.curtidas_Comentarios.create({
            data: CreateCurtidasComentarioDto,
        })
    }
    async findAll(): Promise<CurtidasComentarioEntity[]> {
        return await this.prismarepository.curtidas_Comentarios.findMany({
          orderBy: {
            id: 'asc',
          },
        });
      }
    
      async findOne(id: number): Promise<CurtidasComentarioEntity | null> {
        return await this.prismarepository.curtidas_Comentarios.findFirst({
          where: {
            id,
          },
        });
      }
    
      async update(
        id: number,
        updateCurtidasComentarioDto: UpdateCurtidasComentarioDto,
      ): Promise<CurtidasComentarioEntity> {
        return await this.prismarepository.curtidas_Comentarios.update({
          where: {
            id,
          },
          data: updateCurtidasComentarioDto,
        });
      }
    
      async remove(id: number): Promise<CurtidasComentarioEntity> {
        return await this.prismarepository.curtidas_Comentarios.delete({
          where: {
            id,
          },
        });
      }
}