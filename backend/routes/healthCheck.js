import { FastifyPluginAsync } from 'fastify';
import { APP_VERSION } from '../common/constants';

const schema = {
  description: 'Check service health',
  tags: ['health'],
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        version: { type: 'string' },
      },
    },
  },
};

export default async function healthCheck(app, _opts) {
  app.route({
    method: ['HEAD', 'GET'],
    url: '/info',
    schema,
    async handler() {
      return {
        status: 'OK',
        version: APP_VERSION,
      };
    },
  });
};