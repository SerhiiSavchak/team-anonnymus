import Notiflix from 'notiflix';
import { openMenuBtn, closeMenuBtn, mobMenu } from '../refs/headerRefs';

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

openMenuBtn.addEventListener('click', function () {
  mobMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', function () {
  mobMenu.classList.remove('open');
});
