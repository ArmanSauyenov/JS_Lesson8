//Практика:
//1. Создать 4 div - элемента, разного цвета.
//    Сделать 1 перемещаемый div элемент, в стилях задать ему края(border: 5px solid black;)
//При перемещение блока, когда он находится над цветным дивом, закрашивать его в тот же цвет.
//Внуть дива при перемещение положить текущую позицию дива

//2. Разместить тег video, сделать кнопки управления видео: воспроизвести, пауза, в начало, в конец.
//Сделать так, чтобы после 10 секунды воспрозиведения видео, видео остановилось,
//    под видео появился див с цифрой 5 и через 5 секунд див исчез и видео продолжилось.
//    + дополнительно сделать чтобы на диве 5 отсчитывалось до 1 и при 0 исчезало(обратный отсчет)

var block = document.getElementById('block');

var mouseMove = function (e) {
    e.target.hidden = true;
    var elem = document.elementFromPoint(e.pageX, e.pageY);
    e.target.hidden = false;
    console.log(elem.style.backgroundColor);
    block.style.backgroundColor = document.defaultView.getComputedStyle(elem, null).backgroundColor; // 
    console.log(document.defaultView === window)

    block.innerHTML = '123';
    block.style.left = e.pageX - block.offsetWidth / 2 + 'px';
    block.style.top = e.pageY - block.offsetHeight / 2 + 'px';
}

var mouseUp = function () {
    document.removeEventListener('mousemove', mouseMove);
    block.removeEventListener('mouseup', mouseUp);
}

block.addEventListener('mousedown', function (e) {
    // позиционирование
    block.style.position = 'absolute';

    // перемещение объекта
    document.addEventListener('mousemove', mouseMove)

    // отпустили эллемент, удалили события
    block.addEventListener('mouseup', mouseUp)
})

var conts = document.querySelectorAll('.cont');
console.log(conts);
for (var i = 0; i <conts.length; i++) {
    conts[i].addEventListener('mouseenter', function (e) {
        console.log(e.target.style.backgroundColor);
        block.style.backgroundColor = e.target.style.backgroundColor;
    })
}
