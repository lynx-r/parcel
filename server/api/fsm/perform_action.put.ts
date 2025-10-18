import prisma from '~~/lib/prisma'
import { fsmActionSchema } from '~~/shared/utils/validators/orderFormSchema'

export default defineEventHandler(async (event) => {
  const {
    orderId,
    action,
    userId = 100,
  } = await readValidatedBody(event, fsmActionSchema.parse)
  await prisma.$queryRaw`CALL fsm_perform_action('order', ${orderId}, ${action}, ${userId}, NULL)`
  return prisma.order.findUnique({ where: { id: orderId } })
})
