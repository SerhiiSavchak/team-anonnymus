const switchButton = document.getElementById('switch');
const svg1 = document.getElementById("sun");
const svg2 = document.getElementById("moon");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-open-btn");
switchButton.addEventListener('click', function() {
  svg1.classList.toggle('active');
  svg1.classList.toggle('no-active');
 const moon =svg2.classList.toggle('active');
 svg2.classList.toggle('no-active');
  if(moon){
    body.style.backgroundColor = "f8f8f8";
    header.style.backgroundColor = "black";
    menuBtn.style.color = "#B7B7B7";
  }else{
    body.style.backgroundColor = "f8f8f8";
    header.style.backgroundColor = "white";
    menuBtn.style.color = "#595959";
    
  }
});

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),


  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();