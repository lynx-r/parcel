import prisma from '~~/lib/prisma'

export default defineEventHandler(async () => {
  const parcels = await prisma.parcel.findMany()
  return parcels
})
