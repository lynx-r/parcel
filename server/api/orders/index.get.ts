import prisma from '~~/lib/prisma'

export default defineEventHandler(async () => {
  const orders = await prisma.order.findMany()
  return orders
})
