import { PORT } from './common/constants';

/**
 * Runs Fastify Server
 * Returns server if successful & kills process as needed
 */
export default async function runService(app, port = PORT) {
  // clean exit the server and node process when one of these events occur
  ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM'].forEach((event) => {
    process.on(event, async () => {
      try {
        app.log.warn('Shutting down!');
        await app.close();
        app.log.warn('Successfully Shutdown!');
        process.kill(process.pid, event);
      } catch (err) {
        app.log.warn('Error Shutting Down Server:');
        app.log.fatal(err);
        process.kill(process.pid, event);
      }
    });
  });

  try {
    await app.listen(port, '0.0.0.0');
    return app.server;
  } catch (err) {
    app.log.warn('Error starting server:');
    app.log.fatal(err);
    process.exit(1);
  }
}
