!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a),a("8GIKD"),a("b4pSS");var i=a("bpxeT"),c=a("2TvXO"),o=a("8BR1R"),s="https://api.themoviedb.org/3/",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}},l=document.querySelector(".catalog-list"),d=document.querySelector(".search-form"),p=document.querySelector(".search-form-input"),f=document.querySelector(".error-container");function g(){var e,n=window.innerWidth;m("trending/movie/week?language=en-US&include_adult=false&include_video=false&page=1&per_page=".concat(e=n>=768?20:10),u).then((function(n){w(n.slice(0,e)).then((function(e){x(l,e),l.addEventListener("click",o.selectMovie)}))}))}function h(){var e=f.querySelector(".no-results-message");e&&e.remove()}function m(e,n){return v.apply(this,arguments)}function v(){return(v=e(i)(e(c).mark((function n(t,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s).concat(t),r);case 2:return a=e.sent,e.next=5,a.json();case 5:return i=e.sent,e.abrupt("return",i.results.slice(0,20));case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function y(){return(y=e(i)(e(c).mark((function n(t){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",t);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.genres);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function w(e){return function(e){return y.apply(this,arguments)}(u).then((function(n){var t=function(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}(e,n);return t.map((function(e){return'<li data-id="'.concat(e.id,'" class="catalog-movie">\n        <a class="catalog-item-link" href="">\n            <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500').concat(e.poster,'" alt="').concat(e.title,'" />\n            <div class="catalog-movie-desc">\n            <p class="catalog-item-title">').concat(e.title,'</p>\n            <p class="catalog-item-movie">\n                ').concat(e.genreFirst,", ").concat(e.genreSecond,' | \n                <span class="catalog-item-date">\n                    ').concat(e.release_date.slice(0,4),"\n                </span> \n            </p>\n            </div>\n            </a> \n        </li>")})).join("")}))}function x(e,n){e.innerHTML=n}window.addEventListener("load",g),d.addEventListener("submit",(function(e){e.preventDefault();var n,t=p.value.trim();n=window.innerWidth>=768?20:10;if(""!==t){m("search/movie?query=".concat(t,"&language=en-US&page=1&per_page=").concat(n),u).then((function(e){var t;e.length>0?(w(e.slice(0,n)).then((function(e){x(l,e)})),h()):((t=document.createElement("p")).classList.add("no-results-message"),t.textContent="OOPS... We are very sorry! We don't have any results matching your search.",f.appendChild(t),l.innerHTML="")}))}else g(),h()})),a("8BR1R"),a("cwtus")}();
//# sourceMappingURL=catalog.8ef6745f.js.map
