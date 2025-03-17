import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  readonly title?: string
  readonly content?: string
  readonly imageUrl?: string
  readonly publishedAt?: Date
  readonly category?: string
}
