!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i),i("8GIKD");var a=i("bpxeT"),c=i("2TvXO"),o=i("ks1QH");function s(e,n){return l.apply(this,arguments)}function l(){return(l=e(a)(e(c).mark((function n(t,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.BASE_URL).concat(t),r);case 3:return i=e.sent,e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a.results.slice(0,3));case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=e(a)(e(c).mark((function n(t){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.BASE_URL,"genre/movie/list?language=en"),t);case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i.genres);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var d=document.querySelector(".weekly-list");function f(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}function h(e,n){var t=f(e,n);return t.map((function(e){return' \n        <li class="weekly-item" data-id="'.concat(e.id,'">\n          <a class="weekly-link link" href="">\n              <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/').concat(e.poster,'" alt="').concat(e.title,'" />       \n          <div class="weekly-info">\n              <h2 class="weekly-info-title">').concat(e.title,'</h2>\n                  <div class="info-movie">\n                      <p class="weekly-info-genre">').concat(e.genreFirst,",&nbsp ").concat(e.genreSecond,'&nbsp ▏</p>\n                      <p class="weekly-info-date">').concat(e.release_date.slice(0,4),"</p>\n                  </div>\n          </div></a>     \n      </li>\n       ")})).join("")}function g(e,n){e.innerHTML=n}var v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}};window.addEventListener("load",(function(){var e=u(v);s("trending/all/week?language=en-US",v).then((function(n){console.log(n),e.then((function(e){var t=h(n,e);g(d,t)}))}))})),i("8BR1R"),i("cwtus")}();
//# sourceMappingURL=index.65718552.js.map
