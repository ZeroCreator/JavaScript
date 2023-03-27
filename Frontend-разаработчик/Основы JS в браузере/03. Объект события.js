// Javascript - это язык управления сценариями на веб-странице.
// События - действия, которые происхдят в момент взаимодействия с каким-либо элементом на
// web-странице браузера. Это сигнал от браузера о том, что что-то произошло.
// Обработчик - это функция, которая сработает, как только событие произошло.
// Внутри обработчика события this ссылается на текущий элемент, то есть на тот, на котором он сработал.

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
// Если нужно нажать на кнопку только 1 раз
input.removeEventListener("click", handler1);


// *
<button id="btn1" onclick="console.log('btn1');">BTN1</button>
// **
<button id="btn2">BTN2</button>
<button id="btn3">BTN3</button>

const btn2 = document.GetElementById('btn2');
const btn3 = document.getElementById('btn3');

btn2.onclick = () => {
    console.log('btn2');
}

function onClick() {
    console.log('Первый и единственный клик');
    btn3.removeEventListener('click', onClick)
}

btn3.addEventListener('click', onClick)
btn3.addEventListener('click', () => {
    console.log('hello');
})

// Контекств обработчика this
// может быть ссылкой на разные объекты
// в зависимости от того, в контексте чего запускается данная конкретная функция.
const buttons = Array.from(document.querySelectorAll('button'))

function onClick () {
    if (this.id === 'btn1') {
        console.log(this.id);
        console.log('Hello');
    } else {
        console.log(this.id);
        console.log('By');
    }
}

buttons.forEach((b) => {
    b.addEventListener('click', onClick)
})

//btn2.onclick = function () {
//    console.log(this); // HTMLButtonElement {}
//}

// Объект события (event)
// Event представляет собой любое событие, которое происходит в DOM
// Детали произошедшего браузер записывает в объект события, который передается
// первым аргументом в обработчик (event).
let input = document.getElementById("element");

input.onclick = function(event) {
    console.log(event.type);
}

function onClick = (event)  => {
   console.log(event.type, event.target.id);
}

buttons.forEach((b) => {
    b.addEventListener('click', onClick)
    b.addEventListener('contextmenu', onClick)
})

// Свойства event
// - 1.type - тип события ( click )
// - 2.target - ссылка на объект, который был инициатором события
// - 3.currentTarget - элемент, на котором сработал обработчик.
// Значение в точности такое же, как и у this, но бывают ситуации,
// когда обработчик является методом объекта и его this при помощи bind
// привязан к этому объекту, тогда мы можем использовать event.currenTarget
// - 4.event.clientX/Y - координаты курсора в момент клика (относительно окна)
document.body.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget)
})

// Универсальное кроссбраузерное решение для получения объекта события:
element.onclick = function(e) {
    e = e || window.event;
    // Теперь event - объект события во всех браузерах
};

// События клавиатуры
// 1. Первым срабатывает событие keydown
// 2. Потом срабатывает событие keypress, не дожидаясь поднятия клавиши
// 3. Событие keyup наступает только тогда, когда клавиша отпущена
<textarea></textarea>
const texarea = document.querySelector('textarea')

const onKey = (e) => {
    console.log(e.type, e.repeat, e.key, e.code)
}

texarea.addEventListener('keydown', onKey)
texarea.addEventListener('keyup', onKey)

// t.shiftKey
const onKey = (e) => {
  if (e.code === "Enter" && e.shiftKey) {
    console.log("Перевод строки");
}
  console.log(e.shiftKey)
}

// Нажаты две клавиши
const texarea = document.querySelector('textarea')

let preBtn = null;

const onKey = (e) => {
    if ((e.code === "keyW" && e.code === "KeyA") ||
    (preBtn === "KeyW" && t.code === "KeyA")) {
    console.log("AW")
    }

    console.log(e.code)
    preBtn = e.code
}

texarea.addEventListener('keydown', onKey)

// Свойства KeyboardEvent:
// - KeyboardEvent.altKey - true, если клавиша Alt была активна;
// - key
// - code

// Когда браузер полностью сформировал DOM-дерево, генерируется событие DOMContentLoaded.
// Потом, когда браузер загрузит все ресурсы (стили, скрепты, изображения), то он также
// сгенерирует событие load:

// DOMContentLoad - означает, что все DOM-элементы разметки уже созданы, можно их искать,
// вешать обработчики, создавать интерфейс, но при этом, возможно, еще не догрузились какие-то картинки или стили.

// load - страница и все ресурсы загружены, используется редко, обычно нет нужды ждать этого момента.

// Событие прокрутки страниц
// onscroll
// - показ дополнительных элементов навигации при прокрутке
// - подгрузка и инициация элементов интерфейса, ставших видимыми после прокрутки, например анимация.
<element onscroll="myScript"> // - инлайновый способ через атрибут тэга в HTML
object.onscroll = function(){myScript}; // - через свойство объекта
object.addEventListener("scroll, callback"); // - через метод addEventListener

window.onscroll = function() {
    let scrolled = document.documentElement.scrollTop;
    console.log(scrolled + 'px');
}

// Действие браузера по умолчанию
// Браузер имеет свое собственное поведение по умолчанию для различных событий
// Если надо повесить событие на такой элемент
// <a id="link" href="/">ССылка</a>
let link = document.getElementById('link');
link.onclick = function(event) {
    event.preventDefault();
    alert('Link is clicked');
}

// Возвращение return false из обработчика события предотвращает действие браузера по умолчанию
function handler(event) {
    return false
}