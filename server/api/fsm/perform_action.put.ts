import prisma from '~~/prisma/db'

export default defineEventHandler(async (event) => {
  const { orderId } = await readBody(event)
  return await prisma.$queryRaw`CALL fsm_perform_action('order', ${orderId}, 'reserve_cell', 100, NULL)`
})
