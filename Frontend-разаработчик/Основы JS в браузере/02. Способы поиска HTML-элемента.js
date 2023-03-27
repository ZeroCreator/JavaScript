// Получение одного элемента по id":
// getElementById
// Получение коллекции элементов по тэгу:
// getElementsByTagName
// Получение коллекции элементов по классу:
// getElementsByClassName
// Получение коллекции элементов по имени:
// getElementsByName
let loginButton = document.getElementById('loginBtn');
// аналогично
let loginButtonSame = window.loginBtn;

//querySelector
//querySelectorAll
// Получаем все элементы списка с классом "exclusive"
let exclusiveElements = document.querySelectorAll("ul.exclusive li");
// Получаем первый элемент списка, у которого есть класс "exclusive"
let exclusiveElement = document.querySelector("ul li.exclusive");
// Получение родительского элемента
// Свойство parentElement указывает на ближайшего родителя;
// Метод closest, который по CSS-селектору возвращает ближайшего родителя.
let listElements = document.getElementsByTagName("li");
let firstElement = listElementsх[0];
let firstElement = listElements.item(0);
console.log(firstElement.parentElement); // <ul class="exclusive">...</ul>
console.log(firstElement.closest("ul")); // <ul class="exclusive">...</ul>
console.log(firstElement.closest("*")); // <li>Element</li>
console.log(document.parentElement); // null, так как document является корневым элементом


// Коллекции. Объект HTMLCollection
// Объект HTMLCollection - это список узлов. Отдельный узел может быть доступен по порядковому номеру
// или имени узла и атрибута. Полностью отражает все то, что находится на странице.
// К HTMLCollection нельзя применить методы для обработки массивов, так как он не является массивом
// является псевдомассивом, как и frguments
// КЭШ - область в оперативной памяти

// Получение массива HTML-элементов
// Для получения массива HTML-элементов следует воспользоваться функцией Array.from():
let links = document.getElementsByTagName("a");
console.log(Array.isArray(links)); // false
let arr = Array.from(links);  // преобразование в массив
console.log(Array.isArray(arr)); // true

// получение определенного элемента
// метод item() позволяет получить элемент по его позиции
let listElements = document.getElementsByTagName("li");
let firstElement = listElements.item(0);
// Получение элемента как из массива тоже возможно
let secondElement = listElements[1];

// Получение определенного элемента по его имени
// метод namedItem()
let ageInput = document.getElementsByTagName("input").namedItem("age");
// Узнать количество найденных элементов
let links = document.getElementsByTagName("a");
console.log(Links.length);

// $0 в консоли - упрощает отладку кода и взаимодействие с DOM-деревом
// $1, $2, $3, $4 (браузерно-консольная история)


