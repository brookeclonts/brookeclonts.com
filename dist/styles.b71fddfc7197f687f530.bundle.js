webpackJsonp([1,2],{369:function(n,e,t){var o=t(637);"string"==typeof o&&(o=[[n.i,o,""]]);t(681)(o,{});o.locals&&(n.exports=o.locals)},637:function(n,e,t){e=n.exports=t(638)(),e.push([n.i,'p, span, button, input, li, a {\n  font-family: "Open Sans", Helvetica, arial, sans-serif;\n  color: #5D5C62;\n  font-weight: 300;\n  font-size: 14px; }\n\nh1, h2, h3, h4 {\n  font-family: "Medula One", "Times New Roman", serif;\n  color: #5D5C62;\n  font-weight: 300; }\n\na {\n  text-decoration: none;\n  color: #5D5C62; }\n\n.btn {\n  background-color: transparent;\n  border: solid 1px #5D5C62;\n  color: #5D5C62;\n  border-radius: 0;\n  outline: 0;\n  box-shadow: none;\n  padding: 10px 20px; }\n  .btn:hover {\n    background-color: #5D5C62;\n    color: #FEFFFF;\n    cursor: pointer; }\n  .btn:focus {\n    outline: 0; }\n\n@keyframes draw {\n  to {\n    stroke-dashoffset: 0; } }\n\napp-tattoo svg path {\n  fill-opacity: 0;\n  stroke-width: 3;\n  stroke-dasharray: 800;\n  stroke-dashoffset: 900;\n  animation-name: draw;\n  animation-duration: 5s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: linear; }\n\napp-tattoo svg .st0, app-tattoo svg .st1 {\n  stroke: #F5D0D7; }\n\napp-menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  vertical-align: middle;\n  width: 100%; }\n  app-menu.fixed {\n    position: fixed; }\n  app-menu .header-menu {\n    background: rgba(254, 255, 255, 0.85);\n    display: flex;\n    padding: 10px 0;\n    position: absolute;\n    width: 100%;\n    z-index: 5; }\n    app-menu .header-menu a {\n      color: #484B5A;\n      font-size: 20px;\n      padding: 5px 20px; }\n    app-menu .header-menu .social-icons svg path {\n      fill: #484B5A; }\n    app-menu .header-menu .logo-wrapper {\n      float: left; }\n      app-menu .header-menu .logo-wrapper a {\n        font-family: "Medula One", "Times New Roman", serif;\n        font-size: 20px;\n        letter-spacing: 2px; }\n        @media screen and (min-width: 768px) {\n          app-menu .header-menu .logo-wrapper a {\n            font-size: 38px; } }\n    app-menu .header-menu .links {\n      display: inline-flex;\n      margin-left: auto;\n      vertical-align: middle; }\n    app-menu .header-menu .mobile-icon {\n      height: 28px;\n      width: 28px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-left: auto;\n      padding-right: 20px; }\n      app-menu .header-menu .mobile-icon:hover {\n        cursor: pointer; }\n      app-menu .header-menu .mobile-icon .menu-icon {\n        background: #484B5A;\n        display: block;\n        margin: 3px;\n        height: 3px;\n        width: 30px;\n        border-radius: 12px;\n        opacity: 1;\n        transform: rotate(0deg);\n        transform-origin: left center;\n        transition: .25s ease-in-out; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(1) {\n        transform: rotate(39deg); }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(2) {\n        width: 0%;\n        opacity: 0; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(3) {\n        transform: rotate(-39deg); }\n  app-menu .mobile-links {\n    background-color: #F5D0D7;\n    color: #484B5A;\n    display: block;\n    text-align: center;\n    font-size: 16px;\n    padding-top: 20px;\n    padding-bottom: 30px;\n    position: absolute;\n    z-index: 0;\n    width: 100%;\n    transition: all 0.5s ease;\n    top: -260px; }\n    app-menu .mobile-links.open {\n      top: 58px; }\n    app-menu .mobile-links .mobile-link {\n      padding: 10px 0; }\n      app-menu .mobile-links .mobile-link a {\n        color: #484B5A; }\n        app-menu .mobile-links .mobile-link a:hover {\n          color: #B2B8B4; }\n    app-menu .mobile-links .social-icons svg {\n      margin: 5px; }\n  app-menu .social-icons svg path {\n    fill: #484B5A; }\n    app-menu .social-icons svg path:hover {\n      fill: #B2B8B4; }\n\napp-footer {\n  background-color: #484B5A;\n  color: #FEFFFF;\n  padding: 50px 20px;\n  display: block; }\n  @media screen and (min-width: 768px) {\n    app-footer {\n      display: flex; } }\n  app-footer .links {\n    display: block; }\n    app-footer .links:not(:last-child) {\n      margin-bottom: 10px; }\n  app-footer a {\n    color: #FEFFFF;\n    font-size: 16px;\n    line-height: 1.5; }\n    app-footer a:hover {\n      color: #F5D0D7; }\n\n.footer-section {\n  padding-right: 20px; }\n  @media screen and (min-width: 768px) {\n    .footer-section {\n      display: inline-flex;\n      flex-grow: 1; } }\n  .footer-section:not(:first-child) {\n    margin-top: 30px; }\n    @media screen and (min-width: 768px) {\n      .footer-section:not(:first-child) {\n        margin-left: 50px;\n        margin-top: 0; } }\n  .footer-section h3 {\n    color: #FEFFFF;\n    display: block;\n    font-size: 38px;\n    margin-bottom: 20px;\n    margin-top: 0; }\n  .footer-section form {\n    margin-right: 0;\n    max-width: 400px; }\n  .footer-section input {\n    border: solid 1px #FEFFFF;\n    border-radius: 0;\n    outline: none;\n    box-shadow: none;\n    color: #FEFFFF;\n    background-color: transparent;\n    width: 100%;\n    padding: 10px;\n    font-size: 16px; }\n    .footer-section input:not(:last-child) {\n      margin-bottom: 10px; }\n    .footer-section input:placeholder, .footer-section input::-webkit-input-placeholder, .footer-section input:-moz-placeholder {\n      color: #FEFFFF; }\n    .footer-section input:focus {\n      outline: none; }\n  .footer-section .social-icons {\n    margin-top: 20px; }\n    .footer-section .social-icons svg {\n      margin-right: 10px; }\n      .footer-section .social-icons svg path:hover {\n        fill: #F5D0D7; }\n  .footer-section .invalid {\n    margin-bottom: 5px;\n    font-style: italic;\n    color: #FEFFFF; }\n  .footer-section .btn {\n    background-color: #F5D0D7;\n    color: #484B5A;\n    width: 200px;\n    margin-top: 10px; }\n    .footer-section .btn:hover {\n      background-color: #FEFFFF;\n      color: #484B5A; }\n\napp-message .message {\n  background-color: #FEFFFF;\n  border: solid 1px #484B5A;\n  position: fixed;\n  padding: 20px;\n  max-width: 300px;\n  top: 50px;\n  left: 10px;\n  right: 10px; }\n  @media screen and (min-width: 768px) {\n    app-message .message {\n      max-width: 500px;\n      width: 500px;\n      margin-left: -250px;\n      max-width: auto;\n      left: 50%;\n      right: auto;\n      top: 25%; } }\n\napp-message .close {\n  height: 20px;\n  width: 100%; }\n  app-message .close:hover {\n    cursor: pointer; }\n  app-message .close:before, app-message .close:after {\n    background-color: #B2B8B4;\n    border-radius: 13px;\n    content: \'\';\n    height: 1px;\n    position: absolute;\n    right: 20px;\n    top: 30px;\n    transform: rotate(0deg);\n    transition: transform 0.15s ease-in-out;\n    width: 25px; }\n    app-message .close:before:hover, app-message .close:after:hover {\n      cursor: pointer; }\n  app-message .close.show:before {\n    transform: rotate(40deg); }\n  app-message .close.show:after {\n    transform: rotate(-40deg); }\n\n.loader {\n  background-color: #484B5A;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  text-align: center;\n  width: 100%;\n  z-index: 100;\n  height: 100vh;\n  width: 100vw;\n  transition: background-color 1s ease;\n  transition-delay: 0.5s; }\n  @media screen and (min-width: 768px) {\n    .loader {\n      display: table; } }\n  .loader app-tattoo, .loader svg {\n    height: 100%;\n    max-height: 100%;\n    width: auto; }\n  .loader app-tattoo {\n    display: table-cell;\n    vertical-align: middle;\n    margin: auto;\n    height: 280px;\n    width: 280px;\n    margin-top: -140px;\n    opacity: 1; }\n    @media screen and (min-width: 768px) {\n      .loader app-tattoo {\n        height: 600px;\n        width: 600px;\n        margin-top: -300px;\n        position: fixed;\n        top: 50%;\n        text-align: center;\n        left: 50%;\n        margin-left: -300px;\n        transition: all 0.5s ease; } }\n    @media screen and (min-width: 768px) {\n      .loader app-tattoo.fade {\n        opacity: 0; } }\n  .loader.fade {\n    background-color: rgba(72, 75, 90, 0);\n    pointer-events: none; }\n  @media screen and (min-width: 768px) {\n    .loader.resize app-tattoo {\n      height: 400px;\n      width: 400px;\n      margin-left: -200px; } }\n\napp-home h2 {\n  font-size: 38px;\n  margin-bottom: 20px;\n  letter-spacing: 2px; }\n\napp-home .hero-banner {\n  background-color: #484B5A;\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  display: table;\n  padding: 50px 0; }\n  app-home .hero-banner h1 {\n    color: #FEFFFF;\n    font-size: 38px;\n    margin-bottom: 30px;\n    letter-spacing: 2px; }\n    @media screen and (min-width: 768px) {\n      app-home .hero-banner h1 {\n        font-size: 58px; } }\n  app-home .hero-banner button.btn {\n    border: solid 1px #FEFFFF;\n    color: #FEFFFF;\n    font-size: 20px;\n    padding: 10px 50px; }\n    app-home .hero-banner button.btn:hover {\n      background-color: #FEFFFF;\n      color: #484B5A; }\n\napp-home .hero-content {\n  display: table-cell;\n  vertical-align: middle; }\n\napp-home app-tattoo, app-home svg {\n  display: block;\n  height: 200px;\n  width: 200px;\n  margin: auto;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    app-home app-tattoo, app-home svg {\n      height: 400px;\n      width: 400px; } }\n\napp-home .products-section {\n  background-color: #B2B8B4;\n  display: table;\n  height: 100vh;\n  width: 100vw;\n  margin: auto;\n  text-align: center;\n  padding: 100px 0; }\n  app-home .products-section .products-wrapper {\n    display: table-cell;\n    vertical-align: middle; }\n  app-home .products-section .status-message {\n    color: #484B5A;\n    font-size: 20px; }\n\napp-about {\n  background-color: #FEFFFF;\n  display: block;\n  padding: 50px 0px 50px;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n  @media screen and (min-width: 768px) {\n    app-about {\n      padding: 0px 20px 100px; } }\n  app-about h1 {\n    font-size: 20px;\n    margin-bottom: 20px;\n    letter-spacing: 2px;\n    margin-top: 50px; }\n    @media screen and (min-width: 768px) {\n      app-about h1 {\n        font-size: 38px;\n        margin-top: 160px; } }\n  app-about p {\n    font-size: 14px;\n    line-height: 1.5;\n    margin: 0;\n    text-align: left; }\n    @media screen and (min-width: 768px) {\n      app-about p {\n        margin-left: 20px; } }\n  app-about p, app-about .img-wrapper {\n    display: block; }\n    @media screen and (min-width: 768px) {\n      app-about p, app-about .img-wrapper {\n        display: flex-inline; } }\n  app-about img {\n    max-height: 500px;\n    padding-bottom: 20px; }\n    @media screen and (min-width: 768px) {\n      app-about img {\n        padding-bottom: 0; } }\n  app-about .img-wrapper {\n    padding: 0; }\n  app-about .about-content {\n    max-width: 1000px;\n    margin: auto;\n    padding: 20px; }\n    @media screen and (min-width: 768px) {\n      app-about .about-content {\n        display: flex;\n        padding: 0;\n        margin-top: 50px; } }\n\napp-projects {\n  background-color: #FEFFFF;\n  display: block;\n  padding: 50px 0px 50px;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n  @media screen and (min-width: 768px) {\n    app-projects {\n      padding: 0px 20px 100px; } }\n  app-projects h1 {\n    font-size: 20px;\n    margin-bottom: 20px;\n    letter-spacing: 2px;\n    margin-top: 50px; }\n    @media screen and (min-width: 768px) {\n      app-projects h1 {\n        font-size: 38px;\n        margin-top: 160px; } }\n  app-projects a {\n    color: #c4a6ac; }\n    app-projects a:hover {\n      color: #B2B8B4; }\n  app-projects .sub-header {\n    margin-bottom: 50px; }\n  app-projects p {\n    font-size: 14px;\n    line-height: 1.5;\n    margin: 0;\n    text-align: center; }\n    @media screen and (min-width: 768px) {\n      app-projects p {\n        margin-left: 20px; } }\n  app-projects .project {\n    display: block; }\n    app-projects .project:not(:last-child) {\n      margin-bottom: 20px; }\n    @media screen and (min-width: 768px) {\n      app-projects .project {\n        display: inline;\n        width: 47%;\n        padding: 10px;\n        float: left; } }\n    @media screen and (min-width: 1200px) {\n      app-projects .project {\n        width: 30%; } }\n    app-projects .project img {\n      width: 100%;\n      max-width: 350px;\n      margin: auto; }\n    app-projects .project .project-label {\n      font-family: "Medula One", "Times New Roman", serif;\n      font-size: 28px;\n      margin-top: 20px; }\n    app-projects .project .project-description {\n      padding: 20px; }\n      @media screen and (min-width: 768px) {\n        app-projects .project .project-description {\n          padding: 0px; } }\n\nbody, main {\n  margin: 0;\n  overflow-x: hidden; }\n\npath {\n  transition: fill 0.3s ease; }\n\n.contain {\n  margin: auto;\n  max-width: 1200px;\n  padding: 10px; }\n  @media screen and (min-width: 768px) {\n    .contain {\n      padding: 0; } }\n\n@media screen and (min-width: 769px) {\n  .hide-tab-up {\n    display: none !important; } }\n\n@media screen and (max-width: 768px) {\n  .hide-tab-down {\n    display: none !important; } }\n\n@media screen and (max-width: 1200px) {\n  .desktop-only {\n    display: none !important; } }\n',""])},638:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var p=e[i];"number"==typeof p[0]&&o[p[0]]||(t&&!p[2]?p[2]=t:t&&(p[2]="("+p[2]+") and ("+t+")"),n.push(p))}},n}},681:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=m[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(s(o.parts[a],e))}else{for(var p=[],a=0;a<o.parts.length;a++)p.push(s(o.parts[a],e));m[o.id]={id:o.id,refs:1,parts:p}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],a=i[0],p=i[1],r=i[2],s=i[3],d={css:p,media:r,sourceMap:s};t[a]?t[a].parts.push(d):e.push(t[a]={id:a,parts:[d]})}return e}function i(n,e){var t=u(),o=b[b.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(n){n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function p(n){var e=document.createElement("style");return e.type="text/css",i(n,e),e}function r(n){var e=document.createElement("link");return e.rel="stylesheet",i(n,e),e}function s(n,e){var t,o,i;if(e.singleton){var s=x++;t=g||(g=p(e)),o=d.bind(null,t,s,!1),i=d.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=r(e),o=c.bind(null,t),i=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=p(e),o=l.bind(null,t),i=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function d(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,i);else{var a=document.createTextNode(i),p=n.childNodes;p[e]&&n.removeChild(p[e]),p.length?n.insertBefore(a,p[e]):n.appendChild(a)}}function l(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function c(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([t],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var m={},h=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},f=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,x=0,b=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(n);return t(i,e),function(n){for(var a=[],p=0;p<i.length;p++){var r=i[p],s=m[r.id];s.refs--,a.push(s)}if(n){var d=o(n);t(d,e)}for(var p=0;p<a.length;p++){var s=a[p];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete m[s.id]}}}};var w=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},684:function(n,e,t){n.exports=t(369)}},[684]);