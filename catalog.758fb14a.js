function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=a),a("l4Na6"),a("3rDVG");const r=document.querySelector(".hero-section"),o=document.querySelector(".hero-container"),s=document.querySelector(".hero-modal-close"),l=document.querySelector(".hero-backdrop"),c=document.querySelector(".modal-wrap");var u=a("2shzp"),p=a("bkYP9"),d=a("8IXMh"),f=a("73Jqe"),u=a("2shzp"),h=a("7Y9D8"),p=a("bkYP9");async function g(t,e){try{let n=await (0,u.default).get(`
    ${p.BASE_URL}movie/${t}/videos`,e);return n.data.results[0].key}catch(t){console.log(t),(0,h.Notify).info("Sorry,we couldnt find thrailer")}}var v={};v=new URL(a("kyEFX").resolve("iUwmD"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("dgbdS"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("5C3k6"),import.meta.url).toString();const y={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}};async function b(){try{let t=await (0,u.default).get(`${p.BASE_URL}trending/all/day?language=en-US`,{params:{api_key:p.API_KEY}}),e=t.data.results[Math.floor(19*Math.random())+1],n=(r.style.backgroundImage=`linear-gradient(
      86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url("https://image.tmdb.org/t/p/original${e.backdrop_path||e.poster_path}")`,`  <h1 class="hero-title-resp">${e.title||e.name}</h1>
    
    <div class="hero-rating">
              <div class="hero-rating_body">
                  <div class="rating_active"></div>
              </div>
              <div class="rating_value visuality-hidden">${e.vote_average}</div>
              </div>
  
    <p class="hero-text-resp">
    ${e.overview.split("").slice(0,150).join("")+"..."}
  </p>
    <p class="hero-text-big-resp">
      ${e.overview.split("").slice(0,225).join("")+"..."}
    </p>
    <button type="button" class="hero-btn-resp  js-open-video" data-id="${e.id}" >Watch trailer</button> <button type="button"  class="hero-btn-details link" data-id="${e.id}">More details</button>`);(0,f.addMarkup)(o,n);let i=document.querySelector(".js-open-video"),a=document.querySelector(".hero-btn-details"),s=e.vote_average/.05/2;document.querySelector(".rating_active").style.width=`${s}%`,a.addEventListener("click",d.selectMovie),i.addEventListener("click",x)}catch(t){clearInterval(null),console.log(t)}}function x(e){l.classList.remove("visuality-hidden"),document.body.classList.add("scroll-block"),g(e.target.dataset.id,y).then(e=>{let n=e?function(t){let e=`https://www.youtube.com/embed/${t}`;return`<iframe class="iframe-hero" autoplay; frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture; web-share"
    allowfullscreen   width="250" height="175" src="${e}"></iframe>`}(e):` <p class="hero-error-text">
      OOPS... <br />We are very sorry!<br />
      But we couldn’t find the trailer.
    </p>
    <picture class="hero-picture">
      <source
        media="(min-width:1280px)"
       
        srcset="${t(_)}"
      />
      <source
        media="(min-width:768px)"
        
        srcset="${t(m)}"
      />
      <img
        class="hero-error-img" 
        src="${t(v)}"
        alt="error"
      />
    </picture>`;(0,f.addMarkup)(c,n)})}window.addEventListener("load",function(){try{b(),intervalId=setInterval(()=>{b()},2e4)}catch(t){console.log(t)}}),s.addEventListener("click",function(t){if(l.classList.add("visuality-hidden"),document.querySelector(".iframe-hero")){let t=document.querySelector(".iframe-hero");t.src="",document.body.classList.remove("scroll-block")}l.classList.add("visuality-hidden")});var P={};function E(t){return t.toString().padStart(2,"0")}function M(t){let e=document.querySelector(".catalog-gallery-pagination"),n=e.querySelector(".tui-first"),i=e.querySelector(".tui-last"),a=e.querySelectorAll(".tui-num-page");n.textContent="01",i.textContent=E(t),a.forEach(t=>t.textContent=E(t.textContent))}window,P=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,(function(e){return t[e]}).bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,a,r,o=Object.prototype.hasOwnProperty;for(a=1,r=arguments.length;a<r;a+=1)for(i in n=arguments[a])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),a=n(17),r=n(6);t.exports=function(t,e,n){i(t)?a(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),a=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(a(n,e.static),delete e.static),a(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var a,r;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,a=n;n>=0&&a<r;a+=1)if(e[a]===t)return a;return -1}},function(t,e,n){var i=n(29),a=n(30),r=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),a=r(t)?t(e):i(t,e);return n.innerHTML=a,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){a("pagination","UA-129987462-1")}}},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),a=n(7),r=n(0),o=n(1),s=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=a({init:function(t,e){this._options=r({},c,e),this._currentPage=0,this._view=new s(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),a=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<a,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),a=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(a/2),1))+a-1)>i&&(e=Math.max(i-a+1,1),n=i):(e=(r-1)*a+1,n=Math.min(n=r*a,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),a=n(14),r=n(4),o=n(16),s=n(2),l=n(5),c=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?c(t=t.split(u),function(t){i._bindEvent(t,e,n)}):o(t)&&(n=e,c(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(o(t)){n=e,c(t,function(t,e){i.once(e,t,n)});return}this.on(t,function a(){e.apply(n,arguments),i.off(t,a,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var a=t===i.handler,r=e===i.context,o=a&&r;return o&&n._forgetContext(i.context),o}},p.prototype._offByEventName=function(t,e){var n=this,i=l(e),a=n._matchHandler(e);c(t=t.split(u),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,a):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?c(t,function(t,e){i.off(e,t)}):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,a;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(a=e[i]).handler.apply(a.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),a=n(15);t.exports=function(t){return!i(t)&&!a(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,a=t.length;for(n=n||null;i<a&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),a=n(7),r=n(21),o=n(22),s=n(24),l=n(25),c=n(0),u=n(4),p=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=a({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(h,function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(g,function(t){this._buttons[t+"More"]=d.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(l(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(l(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,a=t.rightPageNumber;for(n=i;n<=a;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==a||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){o(this._getContainerElement(),"click",function(e){var n,i,a=r(e);s(e),(i=this._getButtonType(a))||(n=this._getPageNumber(a)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!d.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),a=n(3),r=n(23);function o(t,e,n,i){var o,s;function l(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,l):"attachEvent"in t&&t.attachEvent("on"+e,l),o=r(t,e),s=!1,a(o,function(t){return t.handler!==n||(s=!0,!1)}),s||o.push({handler:n,wrappedHandler:l})}t.exports=function(t,e,n,r){if(i(e)){a(e.split(/\s+/g),function(e){o(t,e,n,r)});return}a(e,function(e,i){o(t,i,e,n)})}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,a=t[i];return a||(a=t[i]={}),(n=a[e])||(n=a[e]=[]),n}},function(t,e,n){t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){var i=n(3),a=n(8),r=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,l=[];if(s){i(n,function(e){t.classList.add(e)});return}(e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>a(t,l)&&l.push(t)}),o(t,l)}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),a=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),a(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){var i=n(8),a=n(3),r=n(2),o=n(4),s=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i,r,o,s,l=(i=[t],r=[],o=0,s=0,a(e,function(t,n){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(s,n)),s=n+1)}),r.push(e.slice(s)),{exps:i,sourcesInsideIf:r}),c=!1,u="";return a(l.exps,function(t,e){return(c=y(t,n))&&(u=b(l.sourcesInsideIf[e],n)),!c}),u},each:function(t,e,n){var i=y(t,n),o=r(i)?"@index":"@key",l={},c="";return a(i,function(t,i){l[o]=i,l["@this"]=t,s(n,l),c+=b(e.slice(),n)}),c},with:function(t,e,n){var a=i("as",t),r=t[a+1],o=y(t.slice(0,a),n),l={};return l[r]=o,b(e,s(n,l))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,a=[],r=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,a.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return a.push(t.slice(r)),a};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(h,""):c.test(t)?i=_((n=t.split(u))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(d))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e){var n,i,r=_(t[0],e);return r instanceof Function?(n=t.slice(1),i=[],a(n,function(t){i.push(_(t,e))}),r.apply(null,i)):r}function b(t,e){for(var n,i,a,r=1,s=t[1];o(s);)v[i=(n=s.split(" "))[0]]?(a=function(t,e,n){for(var i,a,r,s=v[t],l=1,c=2,u=e[2];l&&o(u);)0===u.indexOf(t)?l+=1:0===u.indexOf("/"+t)&&(l-=1,r=c),c+=2,u=e[c];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=s(e[0].split(" ").slice(1),(i=r,(a=e.splice(1,i-0)).pop(),a),n),e}(i,t.splice(r,t.length-r),e),t=t.concat(a)):t[r]=y(n,e),r+=2,s=t[r];return t.join("")}t.exports=function(t,e){return b(m(t,l),e)}},function(t,e,n){var i=n(1),a=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!o||new Date().getTime()-o>6048e5)&&(window.localStorage.setItem(r,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&a("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),a="";return i(e,function(t,e){a+="&"+e+"="+t}),a=a.substring(1),n.src=t+"?"+a,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);const w=document.querySelector(".catalog-list"),C=document.querySelector(".catalog-form"),I=document.querySelector(".catalog-form-input"),L=document.querySelector(".catalog-error-container"),k=document.querySelector(".catalog-clear-btn"),B=document.getElementById("tui-pagination-container");var u=a("2shzp"),p=a("bkYP9"),u=a("2shzp"),p=a("bkYP9");function S(){return(0,u.default).get(`${p.BASE_URL}genre/movie/list`,{params:{api_key:p.API_KEY,language:"en"}})}var u=a("2shzp"),p=a("bkYP9"),f=a("73Jqe");function N(t,e){let n=t.map(t=>{let n=t.genre_ids,i=n.map(t=>e.find(e=>e.id===t).name);return{release_date:t.release_date,id:t.id,title:t.title,poster:t.poster_path,genreFirst:i[0],genreSecond:i[1]}});return n}var d=a("8IXMh");function O(t){let e=t.map(t=>`<li data-id="${t.id}" class="catalog-movie-item">
            <a class="catalog-item-link link" href="">
                <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500${t.poster}" alt="${t.title}" />
                <div class="catalog-movie-desc">
                <h2  class="catalog-movie-title" data-id="${t.id}">${t.title}</h2>
                <p class="catalog-movie-text" data-id="${t.id}" >
                    ${t.genreFirst}, ${t.genreSecond} | 
                    <span data-id="${t.id} class="catalog-movie-text-date">
                        ${t.release_date.slice(0,4)}
                    </span> 
                </p>
                </div>
                </a> 
            </li>`).join("");return e}async function T(t){let e=await function(t=1){return(0,u.default).get(`${p.BASE_URL}trending/movie/week`,{params:{api_key:p.API_KEY,language:"en-US",include_adult:!1,include_video:!1,page:t}})}(t),n=await S(),i=N(e.data.results,n.data.genres),a=O(i);return M(e.data.total_pages),(0,f.addMarkup)(w,a),w.addEventListener("click",d.selectMovie),e}async function $(t,e){let n=await function(t=1,e){return(0,u.default).get(`${p.BASE_URL}search/movie`,{params:{api_key:p.API_KEY,language:"en-US",include_adult:!1,include_video:!1,query:e,page:t,per_page:10}})}(t,e),i=await S(),a=N(n.data.results,i.data.genres),r=O(a);return M(n.data.total_pages),(0,f.addMarkup)(w,r),w.addEventListener("click",d.selectMovie),n}const A=new(t(P))(B,{itemsPerPage:20,visiblePages:4,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn tui-num-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected tui-num-page">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{page}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip tui-order-{{type}}-ellip"><span class="tui-ico-ellip"></span></a>'}}),j=A.getCurrentPage();async function q(){try{let t=await T(j);A.reset(t.data.total_results),M(t.data.total_pages),B.classList.remove("visuality-hidden")}catch(t){console.log(t)}}async function D(t){let e=t.page;try{await T(e)}catch(t){console.log(t)}}async function F(t){let e=t.page,n=I.value.trim();try{await $(e,n)}catch(t){console.log(t)}}async function U(t){t.preventDefault(),A.off("afterMove",D),B.classList.add("visuality-hidden");let e=I.value.trim();if(!e)return alert("Введіть ваш запит");try{let t=await $(j,e);A.reset(t.data.total_results),M(t.data.total_pages),B.classList.remove("visuality-hidden"),A.on("afterMove",F),t.data.total_results<=20&&(console.log(t.data.total_pages),B.classList.add("visuality-hidden")),t.data.total_results||(L.innerHTML=`<p class="catalog-error-text">OOPS...<br>
      We are very sorry!<br>
      We don’t have any results matching\xa0your search.</p>`)}catch(t){console.log(t.message)}}A.on("afterMove",D),window.addEventListener("load",q),C.addEventListener("submit",U),k.addEventListener("click",function(t){I.value=""}),I.addEventListener("input",function(t){if(0===t.target.value.length){k.style.display="none";return}k.style.display="block"}),a("8IXMh"),a("gTaRf"),a("fsbGD"),a("aVGVk");
//# sourceMappingURL=catalog.758fb14a.js.map
