var number = 15;
var isHasHouse = true;

if(number == 5 || isHasHouse) {
    console.log("Ok");
} else if(number <10 && !isHasHouse) {
    console.log("< 10");
} else if(number == 7) {
    console.log("7");
} else if(number >= 15) {
    console.log(">= 15");
} else if(number != 8) {
    console.log("Ok");
} else {
    console.log("else");
}


var stroka = "world";

switch (stroka) {
    case "4":
        console.log("4");
        brake;
    case "world":
        console.log("world");
        break;
    default:
        console.log("Defoult");
        break;
}