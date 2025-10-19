import prisma from '~~/lib/prisma'

export default defineEventHandler(async () => {
  const orders = await prisma.order.findMany({
    // Опция `include` позволяет включать связанные записи
    include: {
      sender: true, // Включаем объект отправителя
      recipient: true, // Включаем объект получателя
      shipment: {
        include: {
          delivery: {
            include: {
              cell: true,
            },
          },
          pickup: {
            include: {
              cell: true,
            },
          },
        },
      }, // Включаем объект отправления
    },
  })
  return orders
})
