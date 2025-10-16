import prisma from '~~/prisma/db'

export default defineEventHandler(async (event) => {
  const feed = await prisma.postomat.findMany().catch((error) => {
    console.error(error)
  })

  return feed
})
