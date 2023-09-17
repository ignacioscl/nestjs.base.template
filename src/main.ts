import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.NODE_ENV);
  await app.listen(config.port);
}
bootstrap();
