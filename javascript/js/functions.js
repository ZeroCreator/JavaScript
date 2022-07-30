function info(word) {
    console.log("Привет")
    console.log(word + "!!!")
}

info("Z");
info("Hello");
info(56);

function summa(a, b) {
    var res = a + b;
    info(res);
    console.log(res)
}

summa(5, 7)

function summa(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}

var array = [6, 8, 1]

//summa(array)

var res = summa(array);
res *= 2;
console.log("Результат: " + res);


var num = 10;
 function info() {
     var num = 20;
     console.log(num);
 }

 info();
console.log(num)