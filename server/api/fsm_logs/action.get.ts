import prisma from '~~/lib/prisma'

export default defineEventHandler(async (event) => {
  const { entity_type } = getQuery(event)
  console.log('??', entity_type)
  const fsmStates = await prisma.fsmActionLog.findMany({
    where: {
      entity_type: entity_type,
    },
  })
  return fsmStates
})
