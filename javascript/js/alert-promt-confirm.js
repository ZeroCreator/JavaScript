//alert("Какая хорошая погода!");
//var date = confirm("Вы сейчас дома?");
//if(date) {
//    alert("Вы молодец!");
//}
//console.log(date)

//var date = prompt("Скажите сколько вам лет", 20);
//console.log(date)

var person = null;
//var person;
if(confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше имя");
    alert("Привет, " + person);
} else {
    alert("Вы нажали на отмену")
}