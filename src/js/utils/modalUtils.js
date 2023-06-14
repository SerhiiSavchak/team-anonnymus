import { backdropRef } from '../refs/modalRefs';

function toggleModal() {
  backdropRef.classList.toggle('visuality-hidden');
  document.body.classList.toggle('scroll-block');
}

export { toggleModal };
