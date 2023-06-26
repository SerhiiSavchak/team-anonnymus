import { teamLink, modalTeam } from '../refs/footerRefs';

// Отримуємо посилання на елемент по його id

// Додаємо обробник події "click" на посилання
teamLink.addEventListener('click', function (event) {
  event.preventDefault(); // Забороняємо перехід за посиланням

  // Відкриваємо модальне вікно

  modalTeam.style.display = 'flex';
  document.body.classList.add('scroll-block');

  // Забороняємо прокрутку сторінки
  document.body.style.overflow = 'hidden';

  // Закриваємо модальне вікно при натисканні на "x" або за його межами
  modalTeam.addEventListener('click', function (event) {
    document.body.classList.remove('scroll-block');
    if (
      event.target === modalTeam ||
      event.target.classList.contains('team-close-icon')
    ) {
      modalTeam.style.display = 'none';
      document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
    }
  });
});
