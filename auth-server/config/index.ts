// config/index.ts
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 3002,
  JWT_SECRET: process.env.JWT_SECRET || 'fake-secret-key-change-it',
  JWT_SIGN_EXP_IN_MIN: process.env.signExpiresInXm || '60m',
  COOKIE_MAX_AGE: Number(process.env.COOKIE_MAX_AGE) || 3600000,
  isSecure: process.env.NODE_ENV === 'production' || false,
  CORS_ORIGIN: process.env.CORS_ORIGIN?.split(',') || [
    'http://localhost:3001',
    'http://localhost:3002',
  ],
  // EJEMPLO CORS ABAJO
  // CORS_ORIGIN: process.env.NODE_ENV === 'production' ? 'https://myproduction.com' : 'http://localhost:3000',
  // EJEMPLO CORS ARRIBA
};
