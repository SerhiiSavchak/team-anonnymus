function addLeadingZero(number) {
  return number.toString().padStart(2, '0');
}

export function updateBtnNames(lastPage) {
  const pagination = document.querySelector('.catalog-gallery-pagination');
  const firstButton = pagination.querySelector('.tui-first');
  const lastButton = pagination.querySelector('.tui-last');
  const pageButton = pagination.querySelectorAll('.tui-num-page');

  firstButton.textContent = '01';
  lastButton.textContent = addLeadingZero(lastPage);
  pageButton.forEach(
    page => (page.textContent = addLeadingZero(page.textContent))
  );
}
