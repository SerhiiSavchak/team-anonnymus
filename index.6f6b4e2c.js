!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=i.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,n={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)n[t[i]]=e[t[i]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),n("iE7OH").register(JSON.parse('{"EVgbq":"index.6f6b4e2c.js","hrXwp":"error-@1x-mobile.f594a12a.png","fIMz9":"error-@1x-tablet.4cd42245.png","8uvG1":"error-@1x-desctop.a7bff649.png","lllNd":"catalog.cd2cd2d2.js","lhZhz":"catalog.3db313c5.js"}')),n("iKaqA"),n("8GIKD");let o=document.querySelector(".hero-section"),l=document.querySelector(".hero-container"),s=document.querySelector(".hero-modal-close"),c=document.querySelector(".hero-backdrop"),d=document.querySelector(".modal-wrap");var u=n("dIxxU"),p=n("ks1QH"),m=n("8BR1R"),f=n("5aGdC"),u=n("dIxxU"),g=n("6JpON"),p=n("ks1QH");async function v(e,t){try{let i=await (0,u.default).get(`
    ${p.BASE_URL}movie/${e}/videos`,t);return i.data.results[0].key}catch(e){console.log(e),(0,g.Notify).info("Sorry,we couldnt find thrailer")}}var h={};h=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("hrXwp");var y={};y=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("fIMz9");var b={};b=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("8uvG1");let w={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}};async function _(){try{let e=await (0,u.default).get(`${p.BASE_URL}trending/all/day?language=en-US`,{params:{api_key:p.API_KEY}}),t=e.data.results[Math.floor(19*Math.random())+1],i=(o.style.backgroundImage=`linear-gradient(
      86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url("https://image.tmdb.org/t/p/original${t.backdrop_path||t.poster_path}")`,`  <h1 class="hero-title-resp">${t.title||t.name}</h1>
    
    <div class="hero-rating">
              <div class="hero-rating_body">
                  <div class="rating_active"></div>
              </div>
              <div class="rating_value visuality-hidden">${t.vote_average}</div>
              </div>
  
    <p class="hero-text-resp">
    ${t.overview.split("").slice(0,150).join("")+"..."}
  </p>
    <p class="hero-text-big-resp">
      ${t.overview.split("").slice(0,225).join("")+"..."}
    </p>
    <button type="button" class="hero-btn-resp  js-open-video" data-id="${t.id}" >Watch trailer</button> <button type="button"  class="hero-btn-details link" data-id="${t.id}">More details</button>`);(0,f.addMarkup)(l,i);let r=document.querySelector(".js-open-video"),a=document.querySelector(".hero-btn-details"),n=t.vote_average/.05/2;document.querySelector(".rating_active").style.width=`${n}%`,a.addEventListener("click",m.selectMovie),r.addEventListener("click",$)}catch(e){clearInterval(null),console.log(e)}}function $(e){c.classList.remove("visuality-hidden"),document.body.classList.add("scroll-block"),v(e.target.dataset.id,w).then(e=>{let i=e?function(e){let t=`https://www.youtube.com/embed/${e}`;return`<iframe class="iframe-hero" autoplay; frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture; web-share"
    allowfullscreen   width="250" height="175" src="${t}"></iframe>`}(e):` <p class="hero-error-text">
      OOPS... <br />We are very sorry!<br />
      But we couldn’t find the trailer.
    </p>
    <picture class="hero-picture">
      <source
        media="(min-width:1280px)"
       
        srcset="${t(b)}"
      />
      <source
        media="(min-width:768px)"
        
        srcset="${t(y)}"
      />
      <img
        class="hero-error-img" 
        src="${t(h)}"
        alt="error"
      />
    </picture>`;(0,f.addMarkup)(d,i)})}window.addEventListener("load",function(){try{_(),intervalId=setInterval(()=>{_()},2e4)}catch(e){console.log(e)}}),s.addEventListener("click",function(e){if(c.classList.add("visuality-hidden"),document.querySelector(".iframe-hero")){let e=document.querySelector(".iframe-hero");e.src="",document.body.classList.remove("scroll-block")}c.classList.add("visuality-hidden")});var f=(n("5aGdC"),n("5aGdC")),u=n("dIxxU"),p=n("ks1QH");function x(){return(0,u.default).get(`${p.BASE_URL}genre/movie/list`,{params:{api_key:p.API_KEY,language:"en"}})}var u=n("dIxxU"),p=n("ks1QH"),m=n("8BR1R");let k=document.querySelector(".weekly-list");async function E(){try{let e=await function(e=1){return(0,u.default).get(`${p.BASE_URL}trending/movie/week`,{params:{api_key:p.API_KEY,language:"en-US",include_adult:!1,include_video:!1,page:e}})}(),t=e.data.results.slice(0,3),i=await x(),r=i.data.genres,a=function(e,t){let i=function(e,t){let i=e.map(e=>{let i=e.genre_ids,r=i.map(e=>t.find(t=>t.id===e).name);return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:r[0],genreSecond:r[1]}});return i}(e,t);return function(e){let t=e.map(e=>` 
        <li class="weekly-item" data-id="${e.id}">
          <div class="weekly-wrap" ">
              <img class="weekly-poster-img" src="https://image.tmdb.org/t/p/w500/${e.poster}" alt="${e.title}" />       
          <div class="weekly-info">
              <h3  data-id="${e.id}" class="weekly-info-title">${e.title}</h3>
                  <div class="info-movie">
                      <p data-id="${e.id} class="weekly-info-genre">${e.genreFirst},&nbsp ${e.genreSecond}&nbsp ▏</p>
                      <p data-id="${e.id} class="weekly-info-date">${e.release_date.slice(0,4)}</p>
                  </div>
          </div>
          </div>     
      </li>
       `).join("");return t}(i)}(t,r);(0,f.addMarkup)(k,a),k.addEventListener("click",m.selectMovie)}catch(e){console.log(e.message)}}window.addEventListener("load",function(){E()});var u=n("dIxxU"),p=n("ks1QH");let S=document.querySelector(".upcoming-container ");var I=(n("gSoaZ"),n("gSoaZ"));async function L(){try{let e,t;let i=await (0,u.default).get(`${p.BASE_URL}movie/upcoming`,{params:{api_key:p.API_KEY,language:"en-US"}}),r=i.data.results[Math.floor(Math.random()*i.data.results.length)],a=await x(),n=a.data.genres,o=r.genre_ids.map(e=>n.find(t=>t.id===e).name).slice(0,2).join(", ");r.genres=o,S.insertAdjacentHTML("beforeend",(e=r.overview,r.overview.length>300&&(e=r.overview),t=` 
  <div class ="upcoming-section-wrap">
    <picture class="upcoming-poster">
    <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original${r.backdrop_path}">
    <img class="upcoming-img" src="https://image.tmdb.org/t/p/w500${r.poster_path}" alt="${r.title}">
</picture>
    <div class="upcoming-info-wrap">
        <h3 class="upcoming-film-title">${r.title}</h3>
        
        <div class ="upcoming-info-film-wrap">
            <ul class="upcoming-info-film-list list">
              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Release date</p>
                <p class="upcoming-info-film-text release ">${r.release_date.replace(/^(\d+)-(\d+)-(\d+)$/,"$3.$2.$1")}</p>
              </li>

              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Vote / Votes</p>
                <p class="upcoming-info-film-text"><span class="upcoming-info-film-span">${r.vote_average}</span ><b>/</b><span class="upcoming-info-film-span">${r.vote_count}</span></p>
              </li>
            </ul>
            
            <ul class="upcoming-info-film-list list">
              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Popularity</p>
                <p class="upcoming-info-film-text white">${Number(r.popularity.toFixed(1))}</p>
              </li>

              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Genre</p>
                <p class="upcoming-info-film-text white genre-padding-bottom">${r.genres}</p>
              </li>
            </ul> 
             
        </div>
    
        <div class ="upcoming-info-film-overview">
      <h3 class="upcoming-info-film-title">ABOUT</h3>
      <p class="upcoming-info-film-description">${e}</p>
      <button class="btn js-add-remove-library" type="button" data-id="${r.id}">${(0,I.IsMovieInLibrary)(r.id)?"Remove from my library":"Add to my library"}</button>
      </div>
    </div>
  </div>`,r.results?'<h3 class="upcoming-alert">Ops! No upcoming films...</h3>':t));let l=document.querySelector(".js-add-remove-library");l.addEventListener("click",I.onAddRemoveMovie)}catch(e){console.log(e.message)}}window.addEventListener("load",function(){L()}),n("8BR1R"),n("cwtus"),n("45UQO")}();
//# sourceMappingURL=index.6f6b4e2c.js.map
