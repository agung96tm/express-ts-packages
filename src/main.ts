import 'reflect-metadata';

import express from 'express';
import { useContainer as useRoutingContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import { Config } from './config/config';

export class App {
  private app: express.Application = express();

  constructor() {
    this.bootstrap();
  }

  async bootstrap() {
    await this.loadApp();

    this.loadMiddlewares();
    this.runServer();
  }

  async loadApp() {
    useRoutingContainer(Container);
    useExpressServer(this.app, {
      validation: { stopAtFirstError: true },
      classTransformer: true,
      defaultErrorHandler: false,
      cors: true,
      controllers: [__dirname + '/api/controllers/*'],
      middlewares: [__dirname + '/api/middlewares/*'],
    });
  }

  loadMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  runServer() {
    const server = require('http').Server(this.app);
    server.listen(Config.app.port, () => console.log(`Server started at http://localhost:${Config.app.port}`));
  }
}

new App();
