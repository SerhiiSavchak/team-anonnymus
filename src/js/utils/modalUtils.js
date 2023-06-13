import { backdropRef } from '../refs/modalRefs';

function toggleModal() {
  backdropRef.classList.toggle('visuality-hidden');
}

export { toggleModal };
