import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
// import { PrismaClient } from '~~/prisma/generated/client'
// import { PrismaClient } from '../../prisma/generated/client'

// const { PrismaClient } = pkg

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate())
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
