!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i),i("8GIKD"),i("b4pSS");var s=i("bpxeT"),a=i("2TvXO"),c=i("ks1QH");function o(e,n){return l.apply(this,arguments)}function l(){return(l=e(s)(e(a).mark((function n(t,r){var i,s;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c.BASE_URL).concat(t),r);case 3:return i=e.sent,e.next=6,i.json();case 6:return s=e.sent,e.abrupt("return",s.results.slice(0,3));case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=e(s)(e(a).mark((function n(t){var r,i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c.BASE_URL,"genre/movie/list?language=en"),t);case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i.genres);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var f=document.querySelector(".weekly-list"),d=(c=i("ks1QH"),i("8BR1R"));function v(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}function m(e,n){var t=v(e,n);return t.map((function(e){return' \n        <li class="weekly-item" data-id="'.concat(e.id,'">\n          <a class="weekly-link link" href="">\n              <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/').concat(e.poster,'" alt="').concat(e.title,'" />       \n          <div class="weekly-info">\n              <h2 class="weekly-info-title">').concat(e.title,'</h2>\n                  <div class="info-movie">\n                      <p class="weekly-info-genre">').concat(e.genreFirst,",&nbsp ").concat(e.genreSecond,'&nbsp ▏</p>\n                      <p class="weekly-info-date">').concat(e.release_date.slice(0,4),"</p>\n                  </div>\n          </div></a>     \n      </li>\n       ")})).join("")}function h(e,n){e.innerHTML=n}window.addEventListener("load",(function(){var e=u(c.options);o("trending/all/week?language=en-US",c.options).then((function(n){e.then((function(e){var t=m(n,e);h(f,t),f.addEventListener("click",d.selectMovie)}))}))}));s=i("bpxeT"),a=i("2TvXO");var g="https://api.themoviedb.org/3/",w="movie/upcoming",y="genre/movie/list?language=en",b=document.querySelector(".upcoming-container "),x={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}};function k(){return j.apply(this,arguments)}function j(){return(j=e(s)(e(a).mark((function n(){var t,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g).concat(y),x);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.genres);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function _(){return M.apply(this,arguments)}function M(){return(M=e(s)(e(a).mark((function n(){var t,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g).concat(w),x);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results[Math.floor(Math.random()*r.results.length)]);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function T(){return(T=e(s)(e(a).mark((function n(){var t,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return t=e.sent,e.next=5,k();case 5:return r=e.sent,t.genres=t.genre_ids.map((function(e){return r.find((function(n){return n.id===e})).name})).slice(0,2).join(", "),e.abrupt("return",t);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}window.addEventListener("load",(function(){(function(){return T.apply(this,arguments)})().then((function(e){b.insertAdjacentHTML("beforeend",function(e){var n=e.overview;e.overview.length>300&&(n=e.overview.split("").slice(0,300).join("")+"...");var t='\n  \n  <div class ="upcoming-section-wrap">\n  \n    <picture class="upcoming-poster">\n        <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original'.concat(e.backdrop_path,'">\n        <img src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="poster_path" style="width:auto;">\n    </picture>\n\n    <div class="upcoming-info-wrap">\n        <h3 class="upcoming-film-title">').concat(e.title,'</h3>\n        \n        <div class ="info-film">\n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Release date</p>\n                <p class="info-film-resp-release-date">').concat(e.release_date.replace(/^(\d+)-(\d+)-(\d+)$/,"$3.$2.$1"),'</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Vote / Votes</p>\n                <p class="info-film-votes-count"><span>').concat(e.vote_average,"</span><b>/</b><span>").concat(e.vote_count,'</span></p>\n              </div>\n            </div>\n            \n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Popularity</p>\n                <p class="info-film-popularity text-color-white">').concat(Number(e.popularity.toFixed(1)),'</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Genre</p>\n                <p class="info-film-genre-style text-color-white genre-padding-bottom">').concat(e.genres,'</p>\n              </div>\n            </div> \n             \n        </div>\n    \n        <div class ="info-film-overview">\n      <h3 class="film-description-title">ABOUT</h3>\n      <p class="film-description">').concat(n,'</p>\n      <button class="btn">add to my library</button>\n      </div>\n    </div>\n  </div>');return e.results?'<h3 class="upcoming-alert">Ops! No upcoming films...</h3>':t}(e))}))})),i("8BR1R"),i("cwtus")}();
//# sourceMappingURL=index.994d27cb.js.map
