!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a),a("8GIKD"),a("b4pSS");var o=a("bpxeT"),i=a("2TvXO"),c="https://api.themoviedb.org/3/",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}},l=document.querySelector(".catalog-list"),u=document.querySelector(".search-form"),d=document.querySelector(".search-form-input"),p=document.querySelector(".error-container");function f(){var e,n=window.innerWidth;h("trending/movie/week?language=en-US&include_adult=false&include_video=false&page=1&per_page=".concat(e=n>=768?20:10),s).then((function(n){console.log(n),y(n.slice(0,e)).then((function(e){w(l,e)}))}))}function g(){var e=p.querySelector(".no-results-message");e&&e.remove()}function h(e,n){return m.apply(this,arguments)}function m(){return(m=e(o)(e(i).mark((function n(t,r){var a,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c).concat(t),r);case 2:return a=e.sent,e.next=5,a.json();case 5:return o=e.sent,e.abrupt("return",o.results.slice(0,20));case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function v(){return(v=e(o)(e(i).mark((function n(t){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",t);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.genres);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function y(e){return function(e){return v.apply(this,arguments)}(s).then((function(n){var t,r=function(e,n){return e.map((function(e){var t=e.genre_ids.map((function(e){return n.find((function(n){return n.id===e})).name}));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}(e,n);return console.log(r),t=r,console.log(t),t.map((function(e){return'<li class="catalog-movie">\n        <a class="catalog-item-link" href="">\n            <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500'.concat(e.poster,'" alt="').concat(e.title,'" />\n            <div class="catalog-movie-desc">\n            <p class="catalog-item-title">').concat(e.title,'</p>\n            <p class="catalog-item-movie">\n                ').concat(e.genreFirst,", ").concat(e.genreSecond,' | \n                <span class="catalog-item-date">\n                    ').concat(e.release_date.slice(0,4),"\n                </span> \n            </p>\n            </div>\n            </a> \n        </li>")})).join("")}))}function w(e,n){e.innerHTML=n}window.addEventListener("load",f),u.addEventListener("submit",(function(e){e.preventDefault();var n,t=d.value.trim();n=window.innerWidth>=768?20:10;if(""!==t){h("search/movie?query=".concat(t,"&language=en-US&page=1&per_page=").concat(n),s).then((function(e){var t;console.clear(),console.log(e),e.length>0?(y(e.slice(0,n)).then((function(e){w(l,e)})),g()):((t=document.createElement("p")).classList.add("no-results-message"),t.textContent="OOPS... We are very sorry! We don't have any results matching your search.",p.appendChild(t),l.innerHTML="")}))}else f(),g()})),a("8BR1R"),a("cwtus")}();
//# sourceMappingURL=catalog.f3cb1ab9.js.map
