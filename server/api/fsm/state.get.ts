import prisma from '~~/server/utils/prisma.server'

export default defineEventHandler(async () => {
  const fsmStates = await prisma.fsmState.findMany()
  return fsmStates
})
