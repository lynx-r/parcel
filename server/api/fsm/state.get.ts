import prisma from '~~/prisma/db'

export default defineEventHandler(async () => {
  const fsmStates = await prisma.fsmState.findMany()
  console.log('states', fsmStates)
  return fsmStates
})
