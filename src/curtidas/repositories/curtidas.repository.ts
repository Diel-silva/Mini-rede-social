import { PrismaService } from "src/prisma/prisma.service";
import { CurtidaEntity } from "../entities/curtida.entity";
import { CreateCurtidaDto } from "../dto/create-curtida.dto";

export class CurtidasRepository {
    constructor (private readonly prismarepository: PrismaService) {}

    async create (createCurtidaDto: CreateCurtidaDto): Promise <CurtidaEntity> {
        return await this.prismarepository.curtidas.create({
            data: createCurtidaDto,
        })
    }
    async findAll(): Promise<CurtidaEntity[]> {
        return await this.prismarepository.curtidas.findMany({
          orderBy: {
            id: 'asc',
          },
        });
      }
    
      async findOne(id: number): Promise<CurtidaEntity | null> {
        return await this.prismarepository.curtidas.findFirst({
          where: {
            id,
          },
        });
      }
    
      async update(
        id: number,
        createCurtidaDto: CreateCurtidaDto,
      ): Promise<CurtidaEntity> {
        return await this.prismarepository.curtidas.update({
          where: {
            id,
          },
          data: createCurtidaDto,
        });
      }
    
      async remove(id: number): Promise<CurtidaEntity> {
        return await this.prismarepository.curtidas.delete({
          where: {
            id,
          },
        });
      }
}