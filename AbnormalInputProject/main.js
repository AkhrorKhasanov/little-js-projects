let input = document.querySelector('#input');
input.addEventListener('input', function () {
    let len = input.value.length;
    input.style.transform = `rotate(${5 * len}deg)`;
})