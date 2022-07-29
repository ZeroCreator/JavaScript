//var arr = new Array();
var arr = [5, true, "stroka", 0, -100, 5.7];
console.log(arr);
console.log(arr[0]);
arr[3] = "word";
console.log((arr[3]))
console.log((arr.length))

//Многомерные массивы
var matrix = [
    [4, 6, 8], ["stroka", 5.7], [0, -100]
];
matrix[1][0] = 90;
console.log(matrix)
