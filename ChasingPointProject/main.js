let point = document.querySelector('#point');
let x, y;
document.addEventListener('mousemove', function () {
    x = event.clientX + 'px';
    y = event.clientY + 'px';
    point.style.left = x;
    point.style.top = y;
})