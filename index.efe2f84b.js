!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a),a("iKaqA"),a("8GIKD"),a("b4pSS");var o=a("bpxeT"),r=a("2TvXO"),s=a("kVZMu"),c=a("6345n");function l(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}var d=a("8BR1R");function p(e,n){var t=l(e,n);return t.map((function(e){return' \n        <li class="weekly-item" data-id="'.concat(e.id,'">\n          <div class="weekly-wrap" ">\n              <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/').concat(e.poster,'" alt="').concat(e.title,'" />       \n          <div class="weekly-info">\n              <h3  data-id="').concat(e.id,'" class="weekly-info-title">').concat(e.title,'</h3>\n                  <div class="info-movie">\n                      <p data-id="').concat(e.id,' class="weekly-info-genre">').concat(e.genreFirst,",&nbsp ").concat(e.genreSecond,'&nbsp ▏</p>\n                      <p data-id="').concat(e.id,' class="weekly-info-date">').concat(e.release_date.slice(0,4),"</p>\n                  </div>\n          </div>\n          </div>     \n      </li>\n       ")})).join("")}function u(e,n){e.innerHTML=n}var f=document.querySelector(".weekly-list");function m(){return(m=e(o)(e(r).mark((function n(){var t,i,a,o,l;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getTrendingMovie)();case 3:return t=e.sent,i=t.data.results.slice(0,3),e.next=7,(0,c.getGenres)();case 7:a=e.sent,o=a.data.genres,l=p(i,o),u(f,l),f.addEventListener("click",d.selectMovie),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}window.addEventListener("load",(function(){!function(){m.apply(this,arguments)}()}));o=a("bpxeT"),r=a("2TvXO");var v=a("gSoaZ"),g=(c=a("6345n"),a("dIxxU")),w=a("ks1QH");function h(){return g.default.get("".concat(w.BASE_URL,"movie/upcoming"),{params:{api_key:w.API_KEY,language:"en-US"}})}var y=document.querySelector(".upcoming-container "),b="";function x(){return(x=e(o)(e(r).mark((function n(){var t,i,a,o,s;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:return t=e.sent,i=t.data.results[Math.floor(Math.random()*t.data.results.length)],e.next=7,(0,c.getGenres)();case 7:a=e.sent,o=a.data.genres,s=i.genre_ids.map((function(e){return o.find((function(n){return n.id===e})).name})).slice(0,2).join(", "),i.genres=s,y.insertAdjacentHTML("beforeend",k(i)),document.querySelector(".js-add-remove-library").addEventListener("click",v.onAddRemoveMovie),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0.message);case 19:case"end":return e.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}function k(e){var n=e.overview;e.overview.length>300&&(n=e.overview),b=(0,v.IsMovieInLibrary)(e.id)?"Remove from my library":"Add to my library";var t=' \n  <div class ="upcoming-section-wrap">\n    <picture class="upcoming-poster">\n    <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original'.concat(e.backdrop_path,'">\n    <img src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="poster_path" style="width:auto;">\n</picture>\n    <div class="upcoming-info-wrap">\n        <h3 class="upcoming-film-title">').concat(e.title,'</h3>\n        \n        <div class ="info-film">\n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Release date</p>\n                <p class="info-film-resp-release-date">').concat(e.release_date.replace(/^(\d+)-(\d+)-(\d+)$/,"$3.$2.$1"),'</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Vote / Votes</p>\n                <p class="info-film-votes-count"><span class="upcoming-info-span">').concat(e.vote_average,'</span ><b>/</b><span class="upcoming-info-span">').concat(e.vote_count,'</span></p>\n              </div>\n            </div>\n            \n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Popularity</p>\n                <p class="info-film-popularity text-color-white">').concat(Number(e.popularity.toFixed(1)),'</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Genre</p>\n                <p class="info-film-genre-style text-color-white genre-padding-bottom">').concat(e.genres,'</p>\n              </div>\n            </div> \n             \n        </div>\n    \n        <div class ="info-film-overview">\n      <h3 class="film-description-title">ABOUT</h3>\n      <p class="film-description">').concat(n,'</p>\n      <button class="btn js-add-remove-library" type="button" data-id="').concat(e.id,'">').concat(b,"</button>\n      </div>\n    </div>\n  </div>");return e.results?'<h3 class="upcoming-alert">Ops! No upcoming films...</h3>':t}window.addEventListener("load",(function(){!function(){x.apply(this,arguments)}()})),a("8BR1R"),a("cwtus"),a("9sPra"),a("8dpKU")}();
//# sourceMappingURL=index.efe2f84b.js.map
