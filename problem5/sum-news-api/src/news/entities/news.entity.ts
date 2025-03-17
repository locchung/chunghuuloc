import { News as NewsSchema } from '@prisma/client'

export class News implements NewsSchema {
  readonly id: number
  readonly title: string
  readonly content: string
  readonly imageUrl: string
  readonly publishedAt: Date
  readonly category: string
}
