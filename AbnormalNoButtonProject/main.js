let btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', function() {
    btn.style.top = String(50 + Math.floor(Math.random() * 100)) + 'px';
    btn.style.left = String(50 + Math.floor(Math.random() * 100)) + 'px';
})