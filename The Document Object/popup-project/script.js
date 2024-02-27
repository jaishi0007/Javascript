const btn = document.querySelector('button');
const popup = document.querySelector('.wrapper');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})