import prisma from '~~/lib/prisma'
import { createOrderSchema } from '~~/shared/utils/validators/orderFormSchema'

export default defineEventHandler(async (event) => {
  const { shipment, sender_id, recipient_id, description, status } =
    await readValidatedBody(event, createOrderSchema.parse)

  const res = await prisma.order.create({
    data: {
      sender: {
        connect: { id: sender_id },
      },
      recipient: {
        connect: { id: recipient_id },
      },
      status,
      description,
      // Использование вложенной записи для создания нового Shipment
      shipment: {
        create: {
          type: shipment.type,
          delivery: {
            connect: { id: shipment.delivery_id },
          },
          pickup: {
            connect: { id: shipment.pickup_id },
          },
        },
      },
    },
    include: {
      shipment: true,
    },
  })
  return res
})
