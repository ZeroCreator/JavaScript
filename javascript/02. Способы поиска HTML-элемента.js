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
