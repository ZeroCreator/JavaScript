// Javascript - это язык управления сценариями на веб-странице.
// События - действия, которые происхдят в момент взаимодействия с каким-либо элементом на
// web-странице браузера.

// События
// События мыши:
// - click - клик на левую кнопку мыши;
// - contextmenu - клик на правую кнопку мыши;
// - mouseover - когда мышь наводится на элемент;
// - ondblclick - двойной клик мыши;

// События клавиатуры:
// - onkeypress (keydown) - когда нажимаем на кнопку;
// - onkeyup - когда отпускаем кнопку;

// События форм и элементов:
// - onfocus - когда элемент в фокусе;
// - onblur - когда элемент теряет фокус;
// - onsubmit - когда отправляем форму.
window.onload = function() {
    alert("Страница загружена")
}

// Обработчик - это функция, в которой описана реакция на событие.
// Способы:

// * №1. Через атрибут тэга в HTML (инлайновый способ)
// Обработчик события можно указать в виде inline-записи, прямо в атибуте on события.
// Обработка события contextmenu на кнопке <button>
<div>Правый клик на этой кнопке выведет "Клик".</div>
<button oncontextmenu="alert('Клик!');">Правый клик сюда</button>

// * №2. Через свойство объекта
// - найти объект
// - назначить обработчик on и имя обработчика
// Отделяем представление от логики, но на элемент можно повесить только одно значение!!!
<input id="clickMe" type="button" value="Нажми меня"/>
document.getElementById('clickMe').onclick = function() {
    consol.log('Button was clicked')
};

**
function toClick() {
    console.log(' Information ');
}

document.getElementById('clickMe').onclick = toClick;
// присваиваем, но не вызываем, так как у функции toClick нет вызова return,
// то обработчик не сработает, ведь значение функции будет присвоено undefined.
let input = document.getElementById('clickMe');
input.onclick = function() {
    console.log(1)
}
input.onclick = function() {
    console.log(2)
}

// * №3. Через метод addEventListener(event, handler[, phase]);
// Отделяем представление от логики. Позволяет использовать сколько угодно любых обработчиков
element.addEventListener(event, handler[, phase]);
// Аргумент event - это имя события, например click;
// Аргумент handler - ссылка на функцию, которую надо назначить обработчиком
// Аргумент phase - опциональный аргумент
// Удаление обработчика осуществляется вызовом removeEventListener
elem.addEventListener("click", function() {alert('Спасибо!')});
elem.removeEventListener("click", function() {alert('Спасибо!')});

function handler1() {
    alert('Спасибо!');
}
function handler2() {
    alert('Спасибо еще раз!');
}

elem.onclick = function() { alert("Привет!"); };
elem.addEventListener("click", handler1); // Спасибо!
elem.addEventListener("click", handler2); // Спасибо еще раз!

input.removeEventListener("click", handler1);