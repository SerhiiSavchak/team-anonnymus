const bodyStyle = document.querySelector('body');
const themSwitcherButton = document.querySelector('.button-switch');
const halfofmoon = document.querySelector('.icon-halfofmoon');
const moonLeft = document.querySelector('.icon-moon-left');
const moonRight = document.querySelector('.icon-moon-right');
const iconSun = document.querySelector('.icon-sun');

const saveMode = localStorage.getItem('selectedMode');

if (saveMode === 'dark') {
  bodyStyle.classList = 'dark';
  halfofmoon.classList.add('visuality-hidden');
  moonRight.classList.add('visuality-hidden');
  moonLeft.classList.remove('visuality-hidden');
  iconSun.classList.remove('visuality-hidden');
}

themSwitcherButton.addEventListener('click', switchThem);

function switchThem(event) {
  halfofmoon.classList.toggle('visuality-hidden');
  moonRight.classList.toggle('visuality-hidden');
  moonLeft.classList.toggle('visuality-hidden');
  iconSun.classList.toggle('visuality-hidden');

  if (!iconSun.classList.contains('visuality-hidden')) {
    bodyStyle.classList.remove('dark');

    localStorage.setItem('selectedMode', 'dark');
  } else {
    bodyStyle.classList.add('dark');
    localStorage.setItem('selectedMode', 'light');
  }
}
