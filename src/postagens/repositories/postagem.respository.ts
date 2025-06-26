import { PrismaService } from "src/prisma/prisma.service";
import { PostagenEntity } from "../entities/postagen.entity";
import { CreatePostagenDto } from "../dto/create-postagen.dto";
import { Injectable } from "@nestjs/common";
import { UpdatePostagenDto } from "../dto/update-postagen.dto";


export class postagemrepository {
    constructor (private readonly prismarepository: PrismaService) {}

    async create (createPostagenDto: CreatePostagenDto): Promise <PostagenEntity> {
        return await this.prismarepository.postagens.create({
            data: createPostagenDto,
        })
    }
    async findAll(): Promise<PostagenEntity[]> {
        return await this.prismarepository.postagens.findMany({
          orderBy: {
            id: 'asc',
          },
        });
      }
    
      async findOne(id: number): Promise<PostagenEntity | null> {
        return await this.prismarepository.postagens.findFirst({
          where: {
            id,
          },
        });
      }
    
      async update(
        id: number,
        updatePostagenDto: UpdatePostagenDto,
      ): Promise<PostagenEntity> {
        return await this.prismarepository.postagens.update({
          where: {
            id,
          },
          data: updatePostagenDto,
        });
      }
    
      async remove(id: number): Promise<PostagenEntity> {
        return await this.prismarepository.postagens.delete({
          where: {
            id,
          },
        });
      }
}