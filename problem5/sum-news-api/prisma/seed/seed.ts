import { Prisma, PrismaClient } from '@prisma/client'
import { Data } from './seed-data'
const prisma = new PrismaClient()
async function main() {

  Data.forEach(async (n: any) => {
    const createInput = n as Prisma.NewsCreateInput
    await prisma.news.create({
      data: {
        ...createInput
      }
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
