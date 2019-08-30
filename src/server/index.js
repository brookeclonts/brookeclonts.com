'use strict';
import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import App from '../browser/App'
import React from 'react'
import { StaticRouter, matchPath } from "react-router-dom"

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
    const markup = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    )
  
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Brooke Clonts Author Website</title>
          <script src="/bundle.js" defer></script>
        </head>
  
        <body>
          <div id="app">
            ${markup}</div>
        </body>
      </html>
    `
  )
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})