/*Параметры по умолчанию*/
function showMessage(from, text = "текст не добавлен") {
  console.log( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен
