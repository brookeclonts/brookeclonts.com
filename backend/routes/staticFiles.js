import staticServer from 'fastify-static';
import { join } from 'path';
import { IS_DEV, TIME, ROOT_PATH } from '../common/constants';

export default async function staticFiles(app) {
  const root = join(ROOT_PATH, 'public');
  const distRoot = join(root, 'dist');
  // Serve files out of dist dir
  app.register(staticServer, {
    root: distRoot,
    prefix: '/dist',
    // Turn off caching in development
    cacheControl: IS_DEV === false,
    immutable: true,
    maxAge: TIME.YEAR,
    decorateReply: false,
  });
  // Serve everything out of public dir
  app.register(staticServer, {
    root,
    prefix: '/public',
    maxAge: 0,
  });
  // Send html file at root path.
  // Using wildcard route to handle Single SPA routing.
  app.get('/*', (req, reply) => {
    const isRootPath = req.url === '/';
    const { accept = '' } = req.headers;
    // Check if request is looking for html,
    // then send single SPA page.
    // TODO: Maybe use a route map from frontend instead
    if (isRootPath || accept.includes('html')) {
      reply.sendFile('index.html', distRoot);
      return;
    }
    // Else call not found
    reply.callNotFound();
  });
}