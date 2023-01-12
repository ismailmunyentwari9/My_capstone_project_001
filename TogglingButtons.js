const more = document.querySelector('#click_more');
const less = document.querySelector('#click_less');
const hiden = document.querySelector('.hiden');

more.addEventListener('click', () => {
  hiden.style.display = 'block';
  less.style.display = 'block';
  more.style.display = 'none';
});

less.addEventListener('click', () => {
  hiden.style.display = 'none';
  less.style.display = 'none';
  more.style.display = 'block';
});