let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  console.log(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

console.log( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную
