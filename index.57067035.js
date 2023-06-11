const e=document.getElementById("switch"),n=document.getElementById("sun"),t=document.getElementById("moon"),o=document.querySelector("body"),i=document.querySelector(".header"),s=document.querySelector(".menu-open-btn");e.addEventListener("click",(function(){n.classList.toggle("active"),n.classList.toggle("no-active");const e=t.classList.toggle("active");t.classList.toggle("no-active"),e?(o.style.backgroundColor="f8f8f8",i.style.backgroundColor="black",s.style.color="#B7B7B7"):(o.style.backgroundColor="f8f8f8",i.style.backgroundColor="white",s.style.color="#595959")})),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function n(){e.menu.setAttribute("hidden",!0),window.removeEventListener("resize",t)}function t(){window.innerWidth>767&&n()}e.openMenuBtn.addEventListener("click",(function(){e.menu.removeAttribute("hidden"),window.addEventListener("resize",t)})),e.closeMenuBtn.addEventListener("click",n)})();async function c(e,n){try{const t=await fetch(`https://api.themoviedb.org/3/${e}`,n);return(await t.json()).results.slice(0,3)}catch(e){console.log(e.message)}}async function l(e){try{const n=await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",e);return(await n.json()).genres}catch(e){console.log(e.message)}}const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk"}},r=document.querySelector(".weekly-list");window.addEventListener("load",(function(){const e=l(a);c("trending/all/week?language=en-US",a).then((n=>{console.log(n),e.then((e=>{const t=function(e,n){return t=function(e,n){return e.map((e=>{const t=e.genre_ids.map((e=>n.find((n=>n.id===e)).name));return{release_date:e.release_date,id:e.id,title:e.title,poster:e.poster_path,genreFirst:t[0],genreSecond:t[1]}}))}(e,n),t.map((e=>` \n      <li class="weekly-item">\n        <a class="weekly-link link" href="">\n            <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/${e.poster}" alt="${e.title}" />       \n        <div class="weekly-info">\n            <h2 class="weekly-info-title">${e.title}</h2>\n                <div class="info-movie">\n                    <p class="weekly-info-genre">${e.genreFirst},&nbsp ${e.genreSecond}&nbsp ▏</p>\n                    <p class="weekly-info-date">${e.release_date.slice(0,4)}</p>\n                </div>\n        </div></a>     \n    </li>\n     `)).join("");var t}(n,e);!function(e,n){e.innerHTML=n}(r,t)}))}))}));
//# sourceMappingURL=index.57067035.js.map
