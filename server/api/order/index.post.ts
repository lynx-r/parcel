import prisma from '~~/prisma/db'
import orderFormSchema from '~~/shared/utils/validators/orderFormSchema'

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, orderFormSchema.parse)
  console.log(data)

  const res = await prisma.order.create({
    data,
  })
  console.log(res)
  return { status: 200, body: 'OK' }
})
