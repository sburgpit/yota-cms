import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)

  await app.listen(port, () => {
    Logger.log(`Server started on http://localhost:${port}/`)
  })
}
bootstrap()
