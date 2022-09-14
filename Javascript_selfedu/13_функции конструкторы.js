"use strict";

let book = {
    title: "название",
    author: "автор",
    nPagees: 0,
    price: 0,
    size: {height: 100, wigth: 50}
};

//let lib = book; // копирование ссылки на объект

// let lib = {};
//
// // копирование с помощью итерирования
// for (let key in book) {
//     lib[key] = book[key];
//     console.log(key + ": " + lib[key]);
// }

// глубокое копирование с помощью рекурсии
let lib = cloneDeepObj({}, book);
book.size.height = 0;
console.log(lib);

function cloneDeepObj(dest, obj) {
    for (let key in obj) {
        if((typeof obj[key]) == 'object') {
            dest[key] = cloneDeepObj({}, obj[key]);
        } else {
            dest[key] = obj[key];
        }
    }
    return dest
}

// structured cloning algorithm - lodash - _/cloneDep(obj)

// функции - конструкторы
function Book(title, author, prise) {
    // this = {}; (неявно)
    this.title = title;
    this.author = author;
    this.price = price;
    // return this; (неявно)
}

let book = new Book("Муму", "Тургенев", 10);
let book2 = new Book("Онегин", "Пушкин", 20);
// {}
console.log(book);

/*
1. Создается новый пустой объект, на который указывает this.
2. Выполняется тело функции, добавляя в новый объект новые свойства.
3. Возвращается значение this.
 */
