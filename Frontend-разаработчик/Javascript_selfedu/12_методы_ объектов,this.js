"use strict";

// let car = {
//     model: "toyota",
//     color: "black",
//     go: function() {
//         console.log("машина едет");
//     }
// };
//
// car.go();
//
// car.stop = function () {
//     console.log("маштна остановлена");
// }
//
// car.stop();


// this - ссылка на текущий объект.
let car = {
    model: "toyota",
    color: "black",
    go(driverName) {
        console.log("Водитель " + driveName + ": машина едет");
    },
    stop: function () {
        console.log("маштна остановлена");
    },
    getModel() {
        return this.model;
    }
};

car.go("Федор");

let car1 = {model: 'toyota'};
let car2 = {model: 'opel'};

console.log(car1.getModel());
console.log(car2.getModel());

function getModel() {
    return this.model; // вычисляется динамически в момент выполнения функции
}

let get = car.getModel;

console.log(car.getModel());
console.log(get()); // будет ошибка, так вызывается вне объекта.