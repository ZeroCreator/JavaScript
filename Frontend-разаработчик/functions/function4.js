let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  console.log(message);
}

console.log( userName ); // Вася перед вызовом функции

showMessage();

console.log( userName ); // Петя, значение внешней переменной было изменено функцией
