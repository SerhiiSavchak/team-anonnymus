import { btnCloseRef, backdropModalRef } from '../refs/heroRefs';

import { createHeroMarkup } from '../markup/heroMarkup';

window.addEventListener('load', onPageLoad);

btnCloseRef.addEventListener('click', onBtnCloseClick);

function onPageLoad() {
  try {
    createHeroMarkup();
    intervalId = setInterval(() => {
      createHeroMarkup();
    }, 20000);
  } catch (error) {
    console.log(error);
  }
}

function onBtnCloseClick(evt) {
  backdropModalRef.classList.add('visuality-hidden');
  if (document.querySelector('.iframe-hero')) {
    const iframe = document.querySelector('.iframe-hero');

    iframe.src = '';
    document.body.classList.remove('scroll-block');
  }
  backdropModalRef.classList.add('visuality-hidden');
}
