//for(var i = 0; i <= 10; i++) {
//    console.log(i);
//}

for(var j = 100; j > 5; j/=2) {
    console.log(j);
}

var k = 1000;
while (k >= 100) {
    console.log(k)
    k -= 100;
}

//var isHasCar = true;
//while (isHasCar) {
  //
//}

var x = 0;
do {
    console.log(x)
    x++;
} while (x < 10);

//for(var i = 10; i <= 20; i += 2) {
//    if(i > 15)
//        break;

//    console.log(i)
//}

for(var h = 10; h <= 20; h++) {
    if(h % 2 == 0)
        continue;

    console.log(h);
}

var arr = [5, 7, 3, 8, 9, 91];

for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Элемент " + (i + 1) + ": " + arr[i]);
}