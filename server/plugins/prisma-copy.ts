import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', () => {
    const sourcePath = join(
      process.cwd(),
      'node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node',
    )
    const destDir = join(process.cwd(), '.output/server')
    const destPath = join(destDir, 'libquery_engine-rhel-openssl-3.0.x.so.node')

    // Создаём папку, если не существует
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true })
    }

    // Копируем Query Engine
    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, destPath)
      console.log(`Copied ${sourcePath} to ${destPath}`)
    } else {
      console.warn(`Query Engine not found at ${sourcePath}`)
    }
  })
})
