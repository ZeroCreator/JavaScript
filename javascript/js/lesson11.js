var counter = 0;

function onClickButton(element) {
//    alert("Вы нажали на меня");
    counter++;
//    console.log(counter)
    element.innerHTML = "Вы нажали на кнопку: " + counter;
//    element.style.background = "red";
//    element.style.color = "blue";

    element.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";

    console.log(element.name);
    console.log(element.onclick);
}

function onInput(el) {
    if(el.value == "Hello")
        alert("И тебе привет!");
    console.log(el.value);
}