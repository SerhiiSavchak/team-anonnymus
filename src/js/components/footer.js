// Отримуємо посилання на елемент по його id
const teamLink = document.getElementById('team-link');

// Додаємо обробник події "click" на посилання
teamLink.addEventListener('click', function (event) {
  event.preventDefault(); // Забороняємо перехід за посиланням

  // Відкриваємо модальне вікно
  const modal = document.getElementById('team-modal');
  modal.style.display = 'flex';
  document.body.classList.add('scroll-block');

  // Забороняємо прокрутку сторінки
  document.body.style.overflow = 'hidden';

  // Закриваємо модальне вікно при натисканні на "x" або за його межами
  modal.addEventListener('click', function (event) {
    document.body.classList.remove('scroll-block');
    if (event.target === modal || event.target.classList.contains('close')) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
    }
  });
});
