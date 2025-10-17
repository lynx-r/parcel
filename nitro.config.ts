export default defineNitroConfig({
  externals: {
    external: ['@prisma/client', '.prisma/client', 'node:os'],
  },
})
