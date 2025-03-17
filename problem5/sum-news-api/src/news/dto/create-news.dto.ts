import { IsString, IsDate } from "class-validator";

export class CreateNewsDto {
  @IsString()
  readonly title: string
  @IsString()
  readonly content: string
  @IsString()
  readonly imageUrl: string
  @IsString()
  readonly publishedAt: Date
  @IsString()
  readonly category: string
}
