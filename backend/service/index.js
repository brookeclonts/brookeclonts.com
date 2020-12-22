import fastify from 'fastify';
import helmet from 'fastify-helmet';
import compression from 'fastify-compress';
import healthCheck from '../routes/healthCheck';
import { apiRoutes } from './../routes';
import staticFiles from '../routes/staticFiles';
var logger = require('morgan');


export default class Server {
  app = fastify({
    logger,
    // Request logging is a bit verbose. Turn on as needed
    disableRequestLogging: true,
    ignoreTrailingSlash: true,
  });

  constructor() {
    this.middleware();
    this.routes();
  }

  middleware() {
    // setup database
    this.app.register(postgres, { connectionString: process.env.DATABASE_URL });

    // Install and use `fastify-express` module if
    // you need to use express middleware.
    // See: https://github.com/fastify/fastify-express
    // Basic Web Security
    // (https://helmetjs.github.io/docs/)
    // @ts-ignore
    this.app.register(helmet, { contentSecurityPolicy: false });
    fastify.register(require('fastify-cookie'), {
      secret: process.env.SECRET, 
      parseOptions: {}
    })

    // Compress large responses
    this.app.register(compression);
  }

  routes() {
    this.app.register(healthCheck);
    this.app.register(staticFiles);
    this.app.register(apiRoutes, { prefix: '/api' });
  }
}
