import { PartialType } from '@nestjs/swagger';
import { CreateCurtidaDto } from './create-curtida.dto';

export class UpdateCurtidaDto extends PartialType(CreateCurtidaDto) {}
