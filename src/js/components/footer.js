// Отримуємо посилання на елемент по його id
var teamLink = document.getElementById('team-link');

// Додаємо обробник події "click" на посилання
teamLink.addEventListener('click', function (event) {
  event.preventDefault(); // Забороняємо перехід за посиланням

  // Відкриваємо модальне вікно
  var modal = document.getElementById('team-modal');
  modal.style.display = 'flex';

  // Забороняємо прокрутку сторінки
  document.body.style.overflow = 'hidden';

  // Закриваємо модальне вікно при натисканні на "x" або за його межами
  modal.addEventListener('click', function (event) {
    if (event.target === modal || event.target.classList.contains('close')) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
    }
  });
});
