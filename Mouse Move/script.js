const main = document.querySelector('.main');
const h1 = document.querySelector('h1');
const pointer = document.querySelector('.pointer');

main.addEventListener('mousemove', (e) => {
  pointer.style.left = e.clientX + 'px';
  pointer.style.top = e.clientY + 'px';
});

h1.addEventListener('mouseenter', () => {
  pointer.classList.add('blend');
  pointer.style.scale = '2';
});

h1.addEventListener('mouseleave', () => {
  pointer.classList.remove('blend');
  pointer.style.scale = '1';
});
