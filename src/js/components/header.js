const switchButton = document.getElementById('switch');
const svg1 = document.getElementById('sun');
const svg2 = document.getElementById('moon');
const body = document.querySelector("body");
switchButton.addEventListener('click', function() {
  svg1.classList.toggle('active');
  svg1.classList.toggle('no-active');
 const moon =svg2.classList.toggle('active');
 svg2.classList.toggle('no-active');
  if(moon){
    body.style.backgroundColor = "black"
  }else{
    body.style.backgroundColor = "white"
  }
});