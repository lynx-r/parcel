import prisma from '~~/lib/prisma'

export default defineEventHandler(async () => {
  const fsmStates = await prisma.fsmErrorLog.findMany()
  return fsmStates
})
