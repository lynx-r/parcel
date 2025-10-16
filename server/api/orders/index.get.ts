import prisma from '~~/prisma/db'

export default defineEventHandler(async () => {
  const orders = await prisma.order.findMany()
  return orders
})
