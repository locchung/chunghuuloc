import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PrismaService } from 'src/prisma.service';
import { News } from './entities/news.entity'
import { Prisma } from '@prisma/client';
import { HelperService } from 'src/helper/helper.service';

@Injectable()
export class NewsService {
  constructor(private prismaService: PrismaService) {
  }

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    let createNewInput = createNewsDto as Prisma.NewsCreateInput

    try {
      const createNew = await this.prismaService.news.create({
        data: {
          ...createNewInput
        }
      })

      return createNew
    } catch (error) {
      console.error(error)
    }
  }

  async findAll(query: any): Promise<News[]> {
    let options: any = {
      orderBy: {
        publishedAt: 'desc'
      }
    }

    if (query.querySearch) {
      options.where = {
        OR: [
          {
            title: {
              search: query.querySearch,
            },
          },
          {
            content: {
              search: query.querySearch,
            }
          }
        ],
      }
    }

    if (query.startDate && query.endDate) {
      options.where = Object.assign(options.where, {
        AND: [
          {
            publishedAt: {
              gte: query.startDate
            }
          },
          {
            publishedAt: {
              lte: query.endDate
            }
          }
        ]
      })
    }

    const count = await this.prismaService.news.count(options)
    options.count = count;
    options = HelperService.buildLimitOffset(query, options)
    delete options.count;

    const news = await this.prismaService.news.findMany(options)
    return news
  }

  async findOne(id: number): Promise<News> {
    const findOneNew = await this.prismaService.news.findUnique({ where: {id: id} })
    return findOneNew
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    let updateNewInput = updateNewsDto as Prisma.NewsUpdateInput

    const updateNew = await this.prismaService.news.update(
      {
        where: {
          id
        },
        data: {
          ...updateNewInput
        },
      }
    )

    return `Update News Successfully`;
  }

  async remove(id: number) {
    const deleteNew = await this.prismaService.news.delete({where: {id}})
    return `Remove News Successfully`;
  }
}
