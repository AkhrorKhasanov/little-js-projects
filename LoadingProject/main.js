let inner = document.querySelector('#inner');
let span = document.querySelector('#span');
let w = 0;
let interval = setInterval(() => {
    inner.style.backgroundColor = 'orangered';
    span.innerHTML = w;
    inner.style.width = `${w}%`;
    if (w >= 100) {
        clearInterval(interval);
    }
    w++;
}, 50)