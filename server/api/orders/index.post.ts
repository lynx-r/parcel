import prisma from '~~/lib/prisma'
import orderFormSchema from '~~/shared/utils/validators/orderFormSchema'

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, orderFormSchema.parse)

  const res = await prisma.order.create({
    data,
  })
  return res
})
