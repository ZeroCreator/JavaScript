// функция, которая отрабатывает толко один раз (или заданное количество раз)
<button id="elementId">Нажми на меня</button>
<script>
    const element = document.getElementById("element");

    element.onclick = function() {
    // Первое и единственное срабатывание
    this.onclick = null; // то есть присваиваем onclick первоначальное значение
    };
</script>