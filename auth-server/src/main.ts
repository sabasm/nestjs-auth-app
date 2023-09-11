import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from '../config';
import helmet from 'helmet'; // Cambio aquí

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add basic security policies including CSP
  app.use(helmet());

    app.enableCors({
      origin: config.CORS_ORIGIN,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

  await app.listen(config.PORT);
}

bootstrap();
