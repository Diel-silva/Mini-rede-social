import { PartialType } from '@nestjs/swagger';
import { CreatePostagenDto } from './create-postagen.dto';

export class UpdatePostagenDto extends PartialType(CreatePostagenDto) {}
