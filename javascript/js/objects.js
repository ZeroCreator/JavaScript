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
