!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a),a("iKaqA"),a("8GIKD"),a("b4pSS");var i=a("bpxeT"),c=a("2TvXO"),o=a("8BR1R"),s="https://api.themoviedb.org/3/",l={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}},u=document.querySelector(".catalog-list"),d=document.querySelector(".search-form"),p=document.querySelector(".search-form-input"),f=document.querySelector(".error-container"),g=document.querySelector(".btn-clear");function h(e,n){return v.apply(this,arguments)}function v(){return(v=e(i)(e(c).mark((function n(t,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s).concat(t),r);case 3:return a=e.sent,e.next=6,a.json();case 6:return i=e.sent,e.abrupt("return",i.results.slice(0,20));case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",f.innerHTML='<p class="catalog-error-text">OOPS...<br>\n    We are very sorry!<br>\n    We don’t have any results matching your search.</p>');case 14:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function m(){return(m=e(i)(e(c).mark((function n(t){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",t);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.genres);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function y(e){return function(e){return m.apply(this,arguments)}(l).then((function(n){var t=function(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}(e,n);return t.map((function(e){return'<li data-id="'.concat(e.id,'" class="catalog-movie">\n        <div class="catalog-item-link" href="">\n            <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500').concat(e.poster,'" alt="').concat(e.title,'" />\n            <div class="catalog-movie-desc">\n            <p  class="catalog-item-title" data-id="').concat(e.id,'">').concat(e.title,'</p>\n            <p class="catalog-item-movie" data-id="').concat(e.id,'" >\n                ').concat(e.genreFirst,", ").concat(e.genreSecond,' | \n                <span data-id="').concat(e.id,' class="catalog-item-date">\n                    ').concat(e.release_date.slice(0,4),"\n                </span> \n            </p>\n            </div>\n            </div> \n        </li>")})).join("")}))}function b(e,n){e.innerHTML=n}window.addEventListener("load",(function(){var e;e=window.innerWidth>=768?20:10;h("trending/movie/week?language=en-US&include_adult=false&include_video=false&page=1&per_page=".concat(e),l).then((function(n){y(n.slice(0,e)).then((function(e){b(u,e),u.addEventListener("click",o.selectMovie)}))}))})),d.addEventListener("submit",(function(e){e.preventDefault();var n,t=p.value.trim();n=window.innerWidth>=768?20:10;if(""!==t){h("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&per_page=").concat(n),l).then((function(e){0!==e.length?y(e.slice(0,n)).then((function(e){b(u,e)})):f.innerHTML='<p class="catalog-error-text">OOPS...<br>\n      We are very sorry!<br>\n      We don’t have any results matching your search.</p>'}))}})),g.addEventListener("click",(function(e){p.value=""})),p.addEventListener("input",(function(e){if(0===e.target.value.length)return void(g.style.display="none");g.style.display="block"})),a("8BR1R"),a("cwtus"),a("9sPra"),a("8dpKU")}();
//# sourceMappingURL=catalog.294d7558.js.map
