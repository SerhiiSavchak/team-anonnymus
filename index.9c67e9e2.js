var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},e.parcelRequired7c6=t),t("l4Na6"),t("3rDVG"),t("5h2Rr");var s=t("e6Kky"),a=t("8tr1y");function o(e,n){return e.map((e=>{const i=e.genre_ids.map((e=>n.find((n=>n.id===e)).name));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:i[0],genreSecond:i[1]}}))}var l=t("8IXMh");function r(e,n){const i=o(e,n);return i.map((e=>` \n        <li class="weekly-item" data-id="${e.id}">\n          <div class="weekly-wrap" ">\n              <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/${e.poster}" alt="${e.title}" />       \n          <div class="weekly-info">\n              <h3  data-id="${e.id}" class="weekly-info-title">${e.title}</h3>\n                  <div class="info-movie">\n                      <p data-id="${e.id} class="weekly-info-genre">${e.genreFirst},&nbsp ${e.genreSecond}&nbsp ▏</p>\n                      <p data-id="${e.id} class="weekly-info-date">${e.release_date.slice(0,4)}</p>\n                  </div>\n          </div>\n          </div>     \n      </li>\n       `)).join("")}function d(e,n){e.innerHTML=n}const c=document.querySelector(".weekly-list");window.addEventListener("load",(function(){!async function(){try{const e=(await(0,s.getTrendingMovie)()).data.results.slice(0,3),n=await(0,a.getGenres)(),i=r(e,n.data.genres);d(c,i),c.addEventListener("click",l.selectMovie)}catch(e){}}()}));var p=t("7gMLt"),f=(a=t("8tr1y"),t("2shzp")),m=t("bkYP9");function u(){return f.default.get(`${m.BASE_URL}movie/upcoming`,{params:{api_key:m.API_KEY,language:"en-US"}})}const v=document.querySelector(".upcoming-container ");let g="";window.addEventListener("load",(function(){!async function(){try{const e=await u(),n=e.data.results[Math.floor(Math.random()*e.data.results.length)],i=(await(0,a.getGenres)()).data.genres,t=n.genre_ids.map((e=>i.find((n=>n.id===e)).name)).slice(0,2).join(", ");n.genres=t,v.insertAdjacentHTML("beforeend",function(e){let n=e.overview;e.overview.length>300&&(n=e.overview);g=(0,p.IsMovieInLibrary)(e.id)?"Remove from my library":"Add to my library";const i='<h3 class="upcoming-alert">Ops! No upcoming films...</h3>';let t=` \n  <div class ="upcoming-section-wrap">\n    <picture class="upcoming-poster">\n    <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original${e.backdrop_path}">\n    <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="poster_path" style="width:auto;">\n</picture>\n    <div class="upcoming-info-wrap">\n        <h3 class="upcoming-film-title">${e.title}</h3>\n        \n        <div class ="info-film">\n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Release date</p>\n                <p class="info-film-resp-release-date">${e.release_date.replace(/^(\d+)-(\d+)-(\d+)$/,"$3.$2.$1")}</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Vote / Votes</p>\n                <p class="info-film-votes-count"><span class="upcoming-info-span">${e.vote_average}</span ><b>/</b><span class="upcoming-info-span">${e.vote_count}</span></p>\n              </div>\n            </div>\n            \n            <div class="info-film-block">\n              <div class="info-film-item">\n                <p class="info-film-item-text">Popularity</p>\n                <p class="info-film-popularity text-color-white">${Number(e.popularity.toFixed(1))}</p>\n              </div>\n\n              <div class="info-film-item">\n                <p class="info-film-item-text">Genre</p>\n                <p class="info-film-genre-style text-color-white genre-padding-bottom">${e.genres}</p>\n              </div>\n            </div> \n             \n        </div>\n    \n        <div class ="info-film-overview">\n      <h3 class="film-description-title">ABOUT</h3>\n      <p class="film-description">${n}</p>\n      <button class="btn js-add-remove-library" type="button" data-id="${e.id}">${g}</button>\n      </div>\n    </div>\n  </div>`;return e.results?i:t}(n));document.querySelector(".js-add-remove-library").addEventListener("click",p.onAddRemoveMovie)}catch(e){console.log(e.message)}}()})),t("8IXMh"),t("gTaRf"),t("fsbGD"),t("aVGVk");
//# sourceMappingURL=index.9c67e9e2.js.map
