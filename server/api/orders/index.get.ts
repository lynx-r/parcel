import prisma from '~~/server/utils/prisma.server'

export default defineEventHandler(async () => {
  const orders = await prisma.order.findMany()
  return orders
})
