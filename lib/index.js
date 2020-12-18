!function(e,t,n,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequire&&o.parcelRequire,c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,r){if(!t[n]){if(!e[n]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(n,!0);if(a)return a(n,!0);if(c&&"string"==typeof n)return c(n);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}l.resolve=function(t){return e[n][1][t]||t},l.cache={};var d=t[n]=new s.Module(n);e[n][0].call(d.exports,l,d,d.exports,this)}return t[n].exports;function l(e){return s(l.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=t,s.parent=a,s.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},o.parcelRequire=s;for(var i=0;i<n.length;i++)s(n[i]);if(n.length){var d=s(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({"7ba61b273c1cb5a3f489b2e908603dd2":[function(e,t,n){"use strict";e("make-promises-safe"),e("source-map-support/register");var r=o(e("./service"));function o(e){return e&&e.__esModule?e:{default:e}}(0,o(e("./runService")).default)((0,r.default)())},{"./service":"46a9b7aea66e6ce6c00e21d975698b03","./runService":"f5bcceba133a0495c5a2c41046d61c6b"}],"46a9b7aea66e6ce6c00e21d975698b03":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=d(e("fastify")),o=d(e("fastify-helmet")),a=d(e("fastify-compress")),c=d(e("../routes/healthCheck")),s=d(e("./../routes")),i=d(e("../routes/staticFiles"));function d(e){return e&&e.__esModule?e:{default:e}}var l=e("morgan");n.default=class{constructor(){var e,t,n;e=this,t="app",n=(0,r.default)({logger:l,disableRequestLogging:!0,ignoreTrailingSlash:!0}),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.middleware(),this.routes()}middleware(){this.app.register(postgres,{connectionString:process.env.DATABASE_URL}),this.app.register(o.default,{contentSecurityPolicy:!1}),r.default.register(e("fastify-cookie"),{secret:process.env.SECRET,parseOptions:{}}),this.app.register(a.default)}routes(){this.app.register(c.default),this.app.register(i.default),this.app.register(s.default,{prefix:"/api"})}}},{"../routes/healthCheck":"993e15555818af3c98a6f65524f3895a","./../routes":"f4a4917f7159b8759b286825d4bfe2d2","../routes/staticFiles":"9d68af653b44c19b1beaf1fde0acdf1b"}],"993e15555818af3c98a6f65524f3895a":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=async function(e,t){e.route({method:["HEAD","GET"],url:"/info",schema:o,handler:async()=>({status:"OK",version:r.APP_VERSION})})};e("fastify");var r=e("../common/constants");const o={description:"Check service health",tags:["health"],response:{200:{type:"object",properties:{status:{type:"string"},version:{type:"string"}}}}}},{"../common/constants":"3b8e0ad24595ce21fcf861c887ecd7e9"}],"3b8e0ad24595ce21fcf861c887ecd7e9":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.TIME=n.ROOT_PATH=n.APP_DESCRIPTION=n.APP_NAME=n.APP_VERSION=n.isDev=n.PORT=void 0;var r=e("./../../package.json");const o=Number(process.env.PORT)||8095;n.PORT=o;const a="production"!==process.env.NODE_ENV;n.isDev=a;const c=r.version;n.APP_VERSION=c;const s=r.name;n.APP_NAME=s;const i=r.description;n.APP_DESCRIPTION=i;const d=path.join(__dirname,...IS_TEST?["..",".."]:[".."]);n.ROOT_PATH=d;const l={MILLISECOND:1,SECOND:1e3*MILLISECOND,MINUTE:60*SECOND,HOUR:60*MINUTE,DAY:24*HOUR,WEEK:7*DAY,MONTH:30*DAY,YEAR:12*MONTH};n.TIME=l},{"./../../package.json":"90e6cdfe2df384513881f840c2096fe6"}],"90e6cdfe2df384513881f840c2096fe6":[function(e,t,n){t.exports=JSON.parse('{"name":"brooke-clonts-website","version":"1.0.0","private":true,"author":"brookeclonts@gmail.com","repository":{"type":"git","url":"https://github.com/brookeclonts/brookeclonts.com"},"license":"UNLICENSED","main":"lib/index.js","frontend":"public/dist/index.html","targets":{"main":{"context":"node","outputFormat":"commonjs","includeNodeModules":false},"frontend":{"context":"browser","publicUrl":"/dist/"}},"browserslist":["last 4 Chrome versions","not dead"],"engines":{"node":">=12"},"scripts":{"start":"NODE_ENV=production node ./lib/index.js | pino-sentry --level error","start:watch":"NODE_ENV=development nodemon --on-change-only --watch lib/index.js --exec \'node --inspect=0.0.0.0\' lib/index.js","dev":"concurrently -p \'[{name}]\' -n \'BuildB,BuildF,Server\' -c \'bgBlue.bold,bgBlue.bold,bgMagenta.bold\' \'yarn build:backend:watch\' \'yarn build:frontend:watch\' \'yarn start:watch\'","dev:backend":"concurrently -p \'[{name}]\' -n \'Build ,Server\' -c \'bgBlue.bold,bgMagenta.bold\' \'yarn build:backend:watch\' \'yarn start:watch\'","build":"concurrently -n \'Backend ,Frontend\' \'yarn build:backend\' \'yarn build:frontend\'","build:backend":"parcel build --target main ./backend/index.js --no-scope-hoist","build:backend:watch":"parcel watch --target main --port 8282 ./backend/index.js","build:frontend":"parcel build --target frontend ./frontend/index.html --no-scope-hoist","build:frontend:watch":"parcel watch --target frontend --port 8181 ./frontend/index.html","lint":"eslint .","lint:fix":"yarn lint --fix","nuke":"rm -rf lib/ public/ node_modules/ .parcel-cache/ temp-postgres-data/ && yarn","test":"jest"},"dependencies":{"@emotion/core":"^10.0.35","fastify":"^3.5.1","fastify-compress":"^3.3.1","fastify-helmet":"^5.0.2","fastify-oas":"^3.0.2","fastify-static":"^3.2.1","got":"^11.7.0","helmet":"^4.1.1","make-promises-safe":"^5.1.0","path":"^0.12.7","pg":"^8.4.0","pino-sentry":"^0.6.0","rbx":"^2.2.0","react":"16.13.1","react-dom":"16.13.1","react-router-dom":"^5.2.0","react-select":"^3.1.0","source-map-support":"^0.5.19","validator":"^13.5.2"},"devDependencies":{"autoprefixer":"10.0.1","concurrently":"^5.3.0","eslint":"^7.10.0","jest":"^26.5.0","nodemon":"^2.0.4","parcel":"next","prettier":"^2.1.2","supertest":"^5.0.0"}}')},{}],f4a4917f7159b8759b286825d4bfe2d2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.internalRoutes=async function(e){e.register(r.default),e.register(o.default)},n.apiRoutes=async function(e){};var r=a(e("./healthCheck")),o=a(e("./staticFiles"));function a(e){return e&&e.__esModule?e:{default:e}}},{"./healthCheck":"993e15555818af3c98a6f65524f3895a","./staticFiles":"9d68af653b44c19b1beaf1fde0acdf1b"}],"9d68af653b44c19b1beaf1fde0acdf1b":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=async function(e){const t=(0,a.join)(c.ROOT_PATH,"public"),n=(0,a.join)(t,"dist");e.register(o.default,{root:n,prefix:"/dist",cacheControl:!1===c.IS_DEV,immutable:!0,maxAge:c.TIME.YEAR,decorateReply:!1}),e.register(o.default,{root:t,prefix:"/public",maxAge:0}),e.get("/*",(e,t)=>{const r="/"===e.url,{accept:o=""}=e.headers;r||o.includes("html")?t.sendFile("index.html",n):t.callNotFound()})};var r,o=(r=e("fastify-static"))&&r.__esModule?r:{default:r},a=e("path"),c=e("../common/constants")},{"../common/constants":"3b8e0ad24595ce21fcf861c887ecd7e9"}],f5bcceba133a0495c5a2c41046d61c6b:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=async function(e,t=r.PORT){["SIGINT","SIGUSR1","SIGUSR2","SIGTERM"].forEach(t=>{process.on(t,async()=>{try{e.log.warn("Shutting down!"),await e.close(),e.log.warn("Successfully Shutdown!"),process.kill(process.pid,t)}catch(n){e.log.warn("Error Shutting Down Server:"),e.log.fatal(n),process.kill(process.pid,t)}})});try{return await e.listen(t,"0.0.0.0"),e.server}catch(t){e.log.warn("Error starting server:"),e.log.fatal(t),process.exit(1)}};var r=e("./common/constants")},{"./common/constants":"3b8e0ad24595ce21fcf861c887ecd7e9"}]},{},["7ba61b273c1cb5a3f489b2e908603dd2"]);
//# sourceMappingURL=index.js.map