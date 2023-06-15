import Notiflix from 'notiflix';

// const switchButton = document.getElementById('switch');
// const svg1 = document.getElementById('sun');
// const svg2 = document.getElementById('moon');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const menuBtn = document.querySelector('.menu-open-btn');

Notiflix.Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
  fontFamily: 'Roboto,sans-serif',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  customSvgCode: null,
  svgSize: '80px',
  svgColor: '#f87719', // Змінено на червоний колір
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '12px',
  messageMaxLength: 34,
  messageColor: '#f87719',
});

reloadF();
function reloadF() {
  Notiflix.Loading.hourglass('PLEASE WAIT');
}
Notiflix.Loading.remove(400);
const timeout = setTimeout(() => {}, 500);

// switchButton.addEventListener('click', function () {
//   svg1.classList.toggle('active');
//   svg1.classList.toggle('no-active');
//   const moon = svg2.classList.toggle('active');
//   svg2.classList.toggle('no-active');
//   if (moon) {
//     body.style.backgroundColor = 'f8f8f8';
//     header.style.backgroundColor = 'black';
//     menuBtn.style.color = '#B7B7B7';
//   } else {
//     body.style.backgroundColor = 'f8f8f8';
//     header.style.backgroundColor = 'white';
//     menuBtn.style.color = '#595959';
//   }
// });

const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const mobMenu = document.querySelector('[data-menu]');

openMenuBtn.addEventListener('click', function () {
  mobMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', function () {
  mobMenu.classList.remove('open');
});
