let x = document.querySelector('#x');
let y = document.querySelector('#y');
document.addEventListener('mousemove', function () {
    x.innerHTML = event.clientX;
    y.innerHTML = event.clientY;
})