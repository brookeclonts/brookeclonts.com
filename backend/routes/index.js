// import books from './books';
// import users from './users';
// import projects from './projects';
// import blogposts from './blogposts';
// import external from './external';
import healthCheck from './healthCheck';
// import requests from './requests';
import staticFiles from './staticFiles';

export async function internalRoutes(app) {
  app.register(healthCheck);
  app.register(staticFiles);
}

export async function apiRoutes(app) {
  // app.register(customers);
  // app.register(requests);
  // app.register(books);
  // app.register(users);
  // app.register(projects);
  // app.register(blogposts);
  // app.register(external);
}
