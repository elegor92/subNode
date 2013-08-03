window.matchMedia=window.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42==o.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(document),function(e){function t(){$(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!respond.mediaQueriesSupported){var n,r,i,o=e.document,a=o.documentElement,s=[],u=[],l=[],c={},f=30,d=o.getElementsByTagName("head")[0]||a,h=o.getElementsByTagName("base")[0],p=d.getElementsByTagName("link"),g=[],m=function(){for(var t,n,r,i,o=p,a=o.length,s=0;a>s;s++)t=o[s],n=t.href,r=t.media,i=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&i&&!c[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(y(t.styleSheet.rawCssText,n,r),c[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!h||n.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&g.push({href:n,media:r}));v()},v=function(){if(g.length){var e=g.shift();w(e.href,function(t){y(t,e.href,e.media),c[e.href]=!0,v()})}},y=function(e,t,n){var r,i,o,a,l,c=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),f=c&&c.length||0,t=t.substring(0,t.lastIndexOf("/")),d=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},h=!f&&n,p=0;for(t.length&&(t+="/"),h&&(f=1);f>p;p++)for(r=0,h?(i=n,u.push(d(e))):(i=c[p].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,u.push(RegExp.$2&&d(RegExp.$2))),a=i.split(","),l=a.length;l>r;r++)o=a[r],s.push({media:o.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:u.length-1,hasquery:o.indexOf("(")>-1,minw:o.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:o.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});$()},b=function(){var e,t=o.createElement("div"),n=o.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=o.createElement("body"),n.style.background="none"),n.appendChild(t),a.insertBefore(n,a.firstChild),e=t.offsetWidth,r?a.removeChild(n):n.removeChild(t),e=i=parseFloat(e)},$=function(e){var t="clientWidth",c=a[t],h="CSS1Compat"===o.compatMode&&c||o.body[t]||c,g={},m=p[p.length-1],v=(new Date).getTime();if(e&&n&&f>v-n)return clearTimeout(r),r=setTimeout($,f),void 0;n=v;for(var y in s){var w=s[y],_=w.minw,x=w.maxw,C=null===_,E=null===x,k="em";_&&(_=parseFloat(_)*(_.indexOf(k)>-1?i||b():1)),x&&(x=parseFloat(x)*(x.indexOf(k)>-1?i||b():1)),w.hasquery&&(C&&E||!(C||h>=_)||!(E||x>=h))||(g[w.media]||(g[w.media]=[]),g[w.media].push(u[w.rules]))}for(var y in l)l[y]&&l[y].parentNode===d&&d.removeChild(l[y]);for(var y in g){var T=o.createElement("style"),S=g[y].join("\n");T.type="text/css",T.media=y,d.insertBefore(T,m.nextSibling),T.styleSheet?T.styleSheet.cssText=S:T.appendChild(o.createTextNode(S)),l.push(T)}},w=function(e,t){var n=_();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},_=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();m(),respond.update=m,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(x.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function u(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+k.join(r+" ")+r).split(" "),u(i,t,n))}function c(){p.input=function(n){for(var r=0,i=n.length;i>r;r++)N[n[r]]=!!(n[r]in $);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;s>a;a++)$.setAttribute("type",i=e[a]),r="text"!==$.type,r&&($.value=w,$.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&$.style.WebkitAppearance!==n?(m.appendChild($),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle($,null).WebkitAppearance&&0!==$.offsetHeight,m.removeChild($)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?$.checkValidity&&$.checkValidity()===!1:$.value!=w)),A[e[a]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,h="2.6.2",p={},g=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,$=t.createElement("input"),w=":)",_={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",E=C.split(" "),k=C.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},S={},A={},N={},j=[],L=j.slice,P=function(e,n,r,i){var o,a,s,u,l=t.createElement("div"),c=t.body,f=c||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(c?l:f).innerHTML+=o,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(l,e),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),m.style.overflow=u),!!a},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return P("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},D=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),M={}.hasOwnProperty;d=o(M,"undefined")||o(M.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return M.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=L.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(L.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(L.call(arguments)))};return r}),S.flexbox=function(){return l("flexWrap")},S.flexboxlegacy=function(){return l("boxDirection")},S.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},S.canvastext=function(){return!(!p.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},S.webgl=function(){return!!e.WebGLRenderingContext},S.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:P(["@media (",x.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},S.geolocation=function(){return"geolocation"in navigator},S.postmessage=function(){return!!e.postMessage},S.websqldatabase=function(){return!!e.openDatabase},S.indexedDB=function(){return!!l("indexedDB",e)},S.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},S.history=function(){return!(!e.history||!history.pushState)},S.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},S.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},S.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},S.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},S.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},S.backgroundsize=function(){return l("backgroundSize")},S.borderimage=function(){return l("borderImage")},S.borderradius=function(){return l("borderRadius")},S.boxshadow=function(){return l("boxShadow")},S.textshadow=function(){return""===t.createElement("div").style.textShadow},S.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},S.cssanimations=function(){return l("animationName")},S.csscolumns=function(){return l("columnCount")},S.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},S.cssreflections=function(){return l("boxReflect")},S.csstransforms=function(){return!!l("transform")},S.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in m.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},S.csstransitions=function(){return l("transition")},S.fontface=function(){var e;return P('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},S.generatedcontent=function(){var e;return P(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},S.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},S.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},S.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},S.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},S.webworkers=function(){return!!e.Worker},S.applicationcache=function(){return!!e.applicationCache},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},S.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(_.call(t.createElementNS(T.svg,"animate")))},S.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(_.call(t.createElementNS(T.svg,"clipPath")))};for(var R in S)d(S,R)&&(f=R.toLowerCase(),p[f]=S[R](),j.push((p[f]?"":"no-")+f));return p.input||c(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=$=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=m[e[p]];return t||(t={},g++,e[p]=g,m[g]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!d.test(e)?r.frag.appendChild(o):o}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function u(e){e||(e=t);var r=i(e);return!v.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||s(e,r),e}var l,c,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,c=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};e.html5=v,u(t)}(this,t),p._version=h,p._prefixes=x,p._domPrefixes=k,p._cssomPrefixes=E,p.mq=O,p.hasEvent=D,p.testProp=function(e){return s([e])},p.testAllProps=l,p.testStyles=P,p.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+j.join(" "):""),p}(this,this.document);
//@ sourceMappingURL=modernizr.js.map