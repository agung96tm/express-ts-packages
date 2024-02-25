import { env } from '../lib/env';

export const Config = {
  app: {
    name: env('APP_NAME') || '',
    secret: env('APP_SECRET') || '',
    port: env('APP_PORT') || '',
    node: env('NODE_ENV') || 'development',
    isProduction: env('NODE_ENV') === 'production',
    isDevelopment: env('NODE_ENV') === 'development',
  },
};
