import prisma from '~~/lib/prisma.server'

export default defineEventHandler(async () => {
  const fsmStates = await prisma.fsmState.findMany()
  return fsmStates
})
