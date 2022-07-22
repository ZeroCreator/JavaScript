function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log( "Вы согласны." );
}

function showCancel() {
  console.log( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
