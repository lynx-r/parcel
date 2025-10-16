import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // FsmStates
  await prisma.fsmState.createMany({
    data: [
      { name: 'created', label: 'Создан' },
      { name: 'reserved', label: 'Зарезервирован' },
      { name: 'assigned', label: 'Назначен' },
      { name: 'in_progress', label: 'В пути' },
      { name: 'completed', label: 'Завершён' },
    ],
  })

  // FsmActions
  await prisma.fsmAction.createMany({
    data: [
      { name: 'reserve_cell', label: 'Забронировать ячейку' },
      { name: 'assign_courier', label: 'Назначить курьера' },
      { name: 'start_trip', label: 'Начать поездку' },
      { name: 'complete_trip', label: 'Завершить поездку' },
    ],
  })

  // FsmTransitions
  const states = await prisma.fsmState.findMany()
  const actions = await prisma.fsmAction.findMany()

  await prisma.fsmTransition.createMany({
    data: [
      {
        fromStateId: states.find((state) => state.name === 'created').id,
        actionId: actions.find((action) => action.name === 'reserve_cell').id,
        toStateId: states.find((state) => state.name === 'reserved').id,
      },
      {
        fromStateId: states.find((state) => state.name === 'reserved').id,
        actionId: actions.find((action) => action.name === 'assign_courier').id,
        toStateId: states.find((state) => state.name === 'assigned').id,
      },
      {
        fromStateId: states.find((state) => state.name === 'assigned').id,
        actionId: actions.find((action) => action.name === 'start_trip').id,
        toStateId: states.find((state) => state.name === 'in_progress').id,
      },
      {
        fromStateId: states.find((state) => state.name === 'in_progress').id,
        actionId: actions.find((action) => action.name === 'complete_trip').id,
        toStateId: states.find((state) => state.name === 'completed').id,
      },
    ],
  })

  // Orders
  await prisma.order.createMany({
    data: [
      { status: 'created', description: 'Order 1' },
      { status: 'reserved', description: 'Order 2' },
    ],
  })

  // StageOrders
  await prisma.stageOrder.createMany({
    data: [
      { status: 'created', description: 'Stage order 1' },
      { status: 'assigned', description: 'Stage order 2' },
    ],
  })

  // Trips
  await prisma.trip.createMany({
    data: [
      { status: 'in_progress', description: 'Trip 1' },
      { status: 'completed', description: 'Trip 2' },
    ],
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
