// ООП
// Абстракция - рассмотрение объекта реального мира в контексте конкретной задачи
// Инкапсуляция - сокрытие внутренней реализации
// Наследование - передача характеристик одних объектов другим через отношение "является":
// кот является животным
// Полиморфизм - возможность работать с конкретной структурой данных как с абстрактной.

//NEW
// new сщздает по чертежу класса экземпляр:
class BMW {
}

const bmw1 = new BMW();
const bmw2 = new BMW();

// Конструкция new всегда возвращает объект
const obj = {}
obj.title = "Я - обычный объект!";
obj.showTitle = function () {
    console.log(this.title);
};

class SuperObject { }
const superObj = new SuperObject;

// аналогично
superObj.title = "Super";
superObj.showTitle = function () {\
    console.log(this.title);
};

// КОНСТРУКТОР КЛАССА
// Конструктор класса - служебный метод объекта, который выполняется при создании объекта
// Основная задача конструктора - это выделение памяти под объект.
// Конструктор по умолчанию, без параметров. Параметры в прототипе (Object)
// Для гибкой настройки объектов им можно передавать начальные параметры.
// Конструктор задает начальное поведение объекту. Вызывается при создании объекта.
class Book {
}

const book = new Book("Понедельник начинается в субботу");

class Book {

    constructor(name) {
        console.log('Вы хотите создать книгу с названием "${name}"');
    }
}

const boom = new Book("Понедельник начинается в субботу");

// Для сохранения значения - this, доступный в конструкторе
// this всегда указывает на создавамый экземпляр:
class Book {
    constructor(name) {
        this.name = name;
    }
}

const book = new Book("Понедельник начинается в субботу");
console.log(book.name); // "Понедельник начинается в субботу"

// вариант телефонной книги
class Person {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName - lastName;
        this.phone = phone;
    }
}

const phonebook = [
    new Person('Владислав', 'Иванов', '+74993412233'),
    new Person('Леонида', 'Петрова', '+74993412232'),
];
// Попытка вызвать полученный класс или функцию - конструктор без new приводит к ошибке.
// (в отличие от простых функций).
// .constructor
//После вызова конструкции new у нового созданного объекта появляется автоматически свойство constructor:
const data = new Array();

console.log(data.constructor); // [Function: Array]

// Данное свойство ссылается на функцию-конструктор, породившую экземпляр.
const data = new Aircraft();
console.log(data.constructor); // [Function: Aircraft]

class Male {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.gender = "male";
        this.type = "human";
    }
}

const oleg = new Male("Олег", "Иванов");
const ivan = new Male("Иван", "Широков");
const nikita = new Male("Никита", "Огурцов");