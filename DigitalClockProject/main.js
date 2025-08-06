let h = document.querySelector('#h');
let m = document.querySelector('#m');
let s = document.querySelector('#s');
let interval = setInterval(() => {
    let currentDate = new Date();
    h.innerHTML = currentDate.getHours();
    m.innerHTML = currentDate.getMinutes();
    s.innerHTML = currentDate.getSeconds();
}, 1000)