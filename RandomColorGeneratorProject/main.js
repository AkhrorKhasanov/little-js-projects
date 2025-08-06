let boxes = document.querySelectorAll('.box');
let i, j, color1, color2;

for (i = 0; i < boxes.length; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    r1 = 255 - r;
    g1 = 255 - g;
    b1 = 255 - b;
    color1 = `rgb(${r}, ${g}, ${b})`;
    color2 = `rgb(${r1}, ${g1}, ${b1})`;
    boxes[i].style.backgroundColor = color1;
    boxes[i].innerHTML = color1;
    boxes[i].style.color = color2;
}