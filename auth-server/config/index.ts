// config/index.ts
import * as dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3002,
    JWT_SECRET:process.env.JWT_SECRET || 'fake-secret-key-change-it',
    JWT_SIGN_EXP_IN_MIN: process.env.signExpiresInXm || '60m',
  };
  