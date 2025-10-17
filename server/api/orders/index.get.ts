import prisma from '~~/lib/prisma.server'

export default defineEventHandler(async () => {
  const orders = await prisma.order.findMany()
  return orders
})
