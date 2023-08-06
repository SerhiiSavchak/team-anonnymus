import { backdropRef } from '../refs/modalRefs';

export function toggleModal() {
  backdropRef.classList.toggle('visuality-hidden');
  document.body.classList.toggle('scroll-block');
}
