let counter = document.querySelector('#counter');
let value = Number(counter.innerHTML);
let interval = setInterval(() => {
    
    counter.innerHTML = value;
    if (value >= 1000) {
        clearInterval(interval);
    }
    value++;
}, 1)