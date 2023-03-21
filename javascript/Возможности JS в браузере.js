// функция, которая отрабатывает толко один раз (или заданное количество раз)
<button id="elementId">Нажми на меня</button>
<script>
    const element = document.getElementById("element");

    element.onclick = function() {
    // Первое и единственное срабатывание
    this.onclick = null; // то есть присваиваем onclick первоначальное значение
    };
</script>

// Также для того, чтобы отменить стандартное действие браузера, как например,
// открытие ссылки в новой вкладке при клике на элемент <a>, в конце события
// можем вернуть false
<a href="//netology.ru" id="link">Нажми меня</button>
<script>
    const element = document.getElementById("link");

    element.onclick = function() {
    // Любой наш код при клике
    return false;
    // Из-за "return false" перехода
    // по ссылке не произойдет
    };
</script>


// Глобальный объект WINDOW
var name = "Иван";
window.name; // "Иван"
// или
window.lastname = "Иванов";
console.log(lastname); //будет равно "Иванов"

// DOM - объектная модель документа.
// В браузере для работы с HTML реализована модель DOM с главным объектом
// document для взаимодействия с HTML-элементами страницы.


// Введение в BOM
// BOM - объектная модель браузера, то есть все объекты,
// с помощью которых можно взаимодействовать непосредственно с браузером.
// setTimeout - позволяет отложить выполнение функции на N миллисекунд;
// setInterval - позволяет запускать функию каждые N миллисекунд;
// setTimeout и setInterval могут быть отменены через clearTimeout и clearInterval

// Увеличение числа в абзаце на 2 каждую секунду.
<p id="output">1</p>

<script>
    const addText = function(){
        const output = document.getElementById("output");
        output.textContent *= 2;
    }

    setInterval(addText, 1000)
</script>