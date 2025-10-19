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
            create: {
              type: shipment.delivery.type,
              cell_id: shipment.delivery.cell_id,
              cell_size: shipment.delivery.cell_size,
              address: shipment.delivery.address,
            },
          },
          pickup: {
            create: {
              type: shipment.pickup.type,
              cell_id: shipment.pickup.cell_id,
              cell_size: shipment.pickup.cell_size,
              address: shipment.pickup.address,
            },
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
