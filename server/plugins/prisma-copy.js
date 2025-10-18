export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', () => {
    // const sourcePath = join(
    //   process.cwd(),
    //   'prisma/generated/client/libquery_engine-rhel-openssl-3.0.x.so.node',
    // )
    // const destDir = join(process.cwd(), '.output/server')
    // const destPath = join(destDir, 'libquery_engine-rhel-openssl-3.0.x.so.node')

    // if (!existsSync(destDir)) {
    //   mkdirSync(destDir, { recursive: true })
    // }

    // if (existsSync(sourcePath)) {
    //   copyFileSync(sourcePath, destPath)
    //   console.log(`Copied ${sourcePath} to ${destPath}`)
    // } else {
    //   console.warn(`Query Engine not found at ${sourcePath}`)
    // }
    console.log('nitro hook render:response')
  })
})
