import {renderToString} from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import getBooks from '../services/getBooks';
import App from '../components/App/App';

export default function router(req, res) {
    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    return getBooks.all()
        .then(bookResult => {
            const books = bookResult.data;
            const context = {};

            const html = renderToString(
                <StaticRouter context={context} location={req.url}>
                    <App books={books}/>
                </StaticRouter>
            );

            res.status(200).send(renderFullPage(html, books));
        })
        .catch(err => res.status(404).send(`${err}: Oh No! The website isn't finding any books`));
}
