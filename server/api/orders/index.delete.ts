import prisma from '~~/lib/prisma'

export default defineEventHandler(async (event) => {
  const { orderId } = getQuery(event)
  if (!orderId) {
    return `Invalid order id: ${orderId}`
  }
  return await prisma.order.delete({ where: { id: +orderId } })
})
