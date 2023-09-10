import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from '../config';
import * as session from 'express-session';
import * as passport from 'passport';
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

  // Session config
  app.use(
    session({
      secret: config.JWT_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: config.COOKIE_MAX_AGE,
        httpOnly: true,
        secure: config.isSecure,
        sameSite: 'strict',
      },
    }),
  );

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(config.PORT);
}

bootstrap();
