// Создание объектов
let person = new Object(); // устаревший способ
// Затем присвоить свойства
person.firstName = "Иван";
person.lastName = "Орлов";
person.age = 45;

let person = {}; // Современный способ

// форма ниже называется литерал объекта
let person = {
    firstName: "Иван",
    lastName: "Орлов",
    age: 45,
}

// Обьекты и примитивы
// Массивы:

let data = new Array("Иннокентий", "Ильдар", "Ирина");

function sum(a, b) {
    return a + b;
}

console.log(typeof data); // object
console.log(typeof sun); // function

// Свойства

let customProperty = "isCat";
let person = {
    firstName: "Иван",
    // свойства можно задавать и в кавычках
    lastName: "Орлов",
    // кавычки удобны для задания специфических значений
    "font-size": "20px",
    // ES6+, customProperty может быт любым JS-выражением
    [customProperty]: false, // создаст свойство isCat со значением false
};

// можно задавать свойства после создания объекта
person.fatherName = "Борис";
person["patronym"] = "Борисович";

let newProperty = "gender";
// в квадратные скобки можно поместить любое JS-выражение
person[newProperty] = "male"; // создаст свойство gender со значение male

// ES6+. Сокращенное задание свойств
// Можно задавать свойства на основе имени переменной
let firstName = "Иван";

let person = {
    firstName: firstName,
}

// Полностью аналогично: (property:property =>>> property)
let firstName = "Иван";

let person = {
    firstName,
}

// Чтение свойств
console.log(person.firstName); // Иван
console.log(person[lastName]); // Орлов

let myProperty = "age";
console.log(person[myProperty]); // 45

// Обход свйств
// for in
let ivan = {
    firstName: "Иван",
    lastName: "Зайцев",
};

for (let prop in ivan) {
    let value = ivan[prop];
    console.log(`Свойство ${prop}, значение: ${value}`);
}

// Доступ к несуществующим свойствам
let user = {};
console.log(user.name.first); // TypeError: Cannot read property 'first' or underfined
if (user && user.name && user.name.first) { //цепочка прерывается, если значения нет
    console.log(user.name.first);
}
// Optional chaining
if (user?.name?.first) { //цепочка прерывается, если значения нет
    console.log(user.name.first);
}

// Удаление свойств из объектов
// delete
// оператор delete позволяет удалять свойства объектов. Элемент массива - это тоже свойство объекта:
// индекс - имя свойства.

// С помощью delete можно удалить только свойство объекта и нельзя удалить переменные,
// обьявленные через var и let:
arr = {
    0: 'some',
    1: 'value',
    length: 2,
}

// Синтаксис:
delete object.property;
delete object['property'];
delete array[index];

// delete возвращает false только в том случае, если свойство существует, но не может
//быть удалено, и true - в любых других случаях:
let anybodyObject = {
    first: 10,
    second: 20,
}

delete.anybodyObject.first; // true
delete anybodyObject.third; // true
console.log(anybodyObject); // {second: 20}

// При удалении элемента массива в массиве сохраняется пустое место (empty) от этого элемента.
// Длина массива при этом не изменяется:
let array = ["first", "second", "third"];
delete array[2]; // true
console.log(array); // ["first", "second", empty]

// Не удаляемые свойства - встроенные:
f = [1, 2, 'third'];
delete f.length; // false;

// Возврат объектов в функциях
function getProfile(firstName, lastName, birthYear, jobYear) {
    // Текущий год
    let year = new Date().getFullYar();
    return {
        firstName,
        lastName,
        name: firstName + " " + lastName,
        birthYar,
        age: year - birthYear,
        jobYear,
        seniority: year = jobYear,
    }
}

console.log(getProfile("", "", 1980, 2000));

// Методы
// если в свойстве объекта значением будет функция, такое свойство называется методом.
let person = {
    firstName: "Иван",
    showName: function () {
        console.log(`Имя: ${this.firstName}`)
    },
    // или
    showName2() {
        console.log(`Имя: ${this.firstName}`)
    },
}
// вызов метода
person.showName(); // Имя: Иван
const func = person.ShowName;
// func указывает на уже созданную функцию (не копирование)
func(0); // Имя: undefined

// Когда функция вызывается как метод объекта, а не сама по себе, this указывает на объект перед точкой:
// правило - объект до точки.
// В другом случае в зависимости от режима (use strict) либо на глобальный объект (window, global), либо undefined

// Отличие стрелочных функций от обычных
let person = {
    firstName: "Иван",
    printName: function () {
        return this.firstName
    },
    printNameArrow: () => this.firstName, // стрелочные функции не имеют собственного контекста this
    // Если мы используем this внутри стрелочной функции, то его значение берется из внешней формальной функции.
}
console.log(person.prinName()); // "Иван"
console/log(person.printNameArrow()); // "undefined"

// Функции - конструкторы.
// Описывает объекты как некий шаблон. Используются когда необходимо создавать множество одинаковых типовых объектов.
// Фабрика объектов, вызов которой будет возвращать новый объект.
function Car(engin, number) { // с заглавной буквы!!!
    this.engine = engine; // поведение сущности
}
const car1 = new Car("V8", "E234KX"); // создание объектов через new
const car2 = new Car("V16", "O32100");
console.log(car1.engine); // V8
console.log(car2.engine); //V16
// Оператор NEW позаоляет создавать объекты через вызов функции
// Особенности работы функций, вызванных через оператор new:
// - создается новый пустой объект - это контекст.
// - ключевое слово this получает ссылку на этот объект
// - функция выполняется
// - возвращается this без явного указания

// Свойство prototype функции-конструктора
// prototype - это более обширная конструкция, у которой поведение объекта-родителя.
// Пример
// Можно неализовать метод, который сможет использовать все инстансы - экземпляры,
// чтобы не прописывать метод в кажом из объектов:
// для этого мы должны поместить метод (функцию) в свойство prototype функции-конструктора.
// Обратите внимание: user1 и user2 имеют доступ к методу getFullName.
function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}
User.prototype.getFullName = function () {
    console.log("Полное имя: " + this.name + " " + this.lastName);
}
const user1 = new User("Иван", "Иванович");
const user2 = new User("Петр", "Петрович");
console.log(user1.name); // Иван
console.log(user2.name); // Петр

user1.getFullName(); //
user2.getFullName(); //

// Objects.hasOwnProperty()
// Создадим объект Tiger, прототипом которого будет Predator:
const Predator = {
    food: "meat",
}
function Tiger(name) {
    this.name = name
}

Tiger.prototype = Predator; //определяем прототип

const tiger = new Tiger("Vasya");

tiger.hasOwnProperty("name"); // true
tiger.hasOwnProperty("food"); // false

"name" in tiger; //true
"food" in tiger; //true
// Метод Objects.hasOwnProperty() определяет, содержит ли объект
// указанное свойство в качестве собственного свойства объекта.
// В отличие от оператора in, он не проверяет наличие указанного
// свойства по цепочке прототипов.

// Метод Object.create(prototype) создает новый объект с указанным объектом прототипа (prototype):
const tiger = Object.create(predator);
tiger.food; //meat

// Метод Object.assign(target, ...sources)
// Создает новый объект путем копирования значений всех собственных перечисляемых свойств
// из одного или более исходных объектов в целевой объект. В новом стандарте есть аналог - ...
const person = {
    name: "Frederic",
}

const account = {
    balance: 14000,
}

const info1 = Object.assign({}, person, account);
info1.name; // 'Frederic'
info1.balance; // 14000

// современный способ
const info2 = { ...person };
info2.name; // 'Frederic'
let a = {a: 123, b: "sda", c: true};
let b = {a: 42324, d: "dhbcueybufy"};
{...a, ...b} // => {a: 42324, b: "sda", c: true, d: "dhbcueybufy"};

// Еще способ (не копирует методы)
let newObj = JSON.parse(JSON.stringify(person));
JSON.stringify(a) // "{\"a\": 123, \"b\": \"sda\", \"c\": true}"
JSON.parse({\"a\": 123, \"b\": \"sda\", \"c\": true}") // {a: 123, b: "sda", c: true}

// Еще можно циклом for in

// Глубокое клонирование (рекурсивное клонирование).
// если свойства являются ссылками на другие объекты
let car1 = {
  name: "Ford",
  engine: {
    volume: 2.0,
    eco: 5,
  },
}

let car2 = Object.assign({}, user); // клон car1

car1.engine === car2.engine;
// true, один и тот же объект, а нам хотелось бы клон.
// Для глубокого клонирования следует в цикле клонирования проверять,
// не является ли значение car1[key] объектом, и если это так - скопировать
// и его структуру тоже. Можно использовать готовую реализацию - рекурсивный метод
// _.cloneDeep(obj) из JavaScript-библиотеки lodash.

// Методы статических объектов (статические данные получают без создания объектов)
// Object.keys(obj) | Object.values(obj)
// - keys - возвращает массив, содержащий имена всех собственных перечисляемых свойств переданного объекта
// - values - возвращает массив значений перечисляемых свойств объекта в том же порядке, что и цикл for...in
Object.key(info); // ["name", "balance"]
Object.values(info); // ["Frederic", 14000]

// Метод Object.entries(obj) - массив пар ключ-значение
// Метод возвращает массив собственых перечисляемых свойств указанного объекта в формате
// [key, value] в том же порядке, что и в цикле for...in
Object.entries(info); // [["name", "Frederic"], ["balance', 14000]]

// Деструктуризация - механизм, позволяющий сохранить значения в определенном алгоритме
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
}

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${values}`);
});

for (const key of Object.key(obj)) {
    console.log(`${key} ${values}`);
}
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(`${key[i]} ${values[i]}`);
}

// Работа с DATE
let tiday = new Date(1995, 11, 17) // используется как конструктор
let start = Date.now() // используется как объект
new Date();
// Интернационализировать даты - Intl:
const date = new Date();

const formatter = new Intl.DateTimeFormat("ru");
gotmatter.format(date); // "23.11.2018"

// Методы объекта Math
Math.PI
Math.E
Math.random();
Math.max
Math.min
Math.floor(2.6); // в меньшую сторону
Math.round(2.6); // до ближайшего целого
Math.ceil(2.1); // в большую сторону
Math.trunc(3.15) // отсекает дробную часть - разница с Math.floor при работе с отрицательными числами
Math.abs(-2); //2

// Number.toFixed() - возвращает строку:
var numObj = 12345.6789;
numObj.toFixed(6);
numObj.toFixed(); // '12345' - дробной части нет
numObj.toFixed(1); // '12345.6'
numObj.toFixed(6); // '12345.678900'
