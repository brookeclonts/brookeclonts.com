export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Brooke Clonts</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__preloadedState__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            
        </body>
        </html>
    `
}