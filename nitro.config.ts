export default defineNitroConfig({
  externals: {
    inline: ['@prisma/client', '.prisma/client'],
  },
})
