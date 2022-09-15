"use strict";

// Массив - для хранения упорядоченных данных
[]
let ar = [1, 2, 3, 4];
console.log(ar[0], ar[1], ar[2], ar[3], ar[4]);
// Изменить элемент массива
ar[1] = 8;
console.log(ar);

// Добавление элементов в массив
ar[4] = 10;
console.log(ar);

// Длина массива
console.log(ar.length);

let ar = ['Яблоко', 'Апельсин', 'Слива'];
ar[1] = 'Груша';
ar[3] = 'Лимон';
//ar[999] = "Виноград";

// Вывод массива в цикле:
for(let i=0; i<ar.length; ++i)
    console.log(ar[i]);

let dig = [1, 2, 3, 4, 5];
dig.length = 3; // удаляем последние элементы
dig.length = 5;
console.log(dig.length);

let ar = ['Яблоко', {name: 'Джон'},
            true,
            function() {alert('привет');}];

console.log(ar[1].name);

// неоптимизированный массив
let digit = [];
digit[999] = 1;

let digits = [];
digits.zero = null;
digits[100] = 100;
digits[99] = 99;


// Перебор массива
let fruits = ['Яблоко', 'Апельсин', 'Груша'];
// for(let i=0; i<fruits.length; ++i) // работаем с самими элементами, можно изменить массив
//     console.log(fruits[i]);


// for of - для массива, for in - для перебора свойств объекта
for(let value of fruits) {
    value = 'none';
}

for(let value of fruits) // value содержит копию элементов массива, сам массив не меняется
    console.log(value);

// Методы push/pop - добавлять/удалять последний элемент массива
let ar = ['Яблоко', 'Слива'];
ar.push("Груша") // === ar[ar.length] = "Груша";
let delElem = ar.pop(); // метод pop возвращает последний элемент
consol.log(delElem)
console.log(ar);

// Методы shift/unshift - добавлять/удалять первый элемент массива
let fruits = ['Яблоко', 'Апельсин', 'Груша'];
let delElem = fruits.shift();
fruits.unshift('Персик');
console.log(fruits);

/*
Очереди:
1. FIFO - первым вошел, первым вышел
(shift + push)
2. Стек - добавляем последний элемент и извлекаем последний элемент
(push + pop)
Стек работате быстрее, чем FIFO, так как shift и unshift сдвигают элементы массива
 */

// Многомерные массивы
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix[1][1] = 0;
console.log(matrix);

// перебор многомерных массивов
for(let row of matrix) {
    let cols = "";
    for(let val of row)
        cols += val + " ";

    consol.log(cols);
}

for(let i=0; i < matrix.length; ++i) {
    let cols = "";
    for(let j=0; j < matrix.length; ++j)
        cols += matrix[i][j] + " ";

    consol.log(cols);
}