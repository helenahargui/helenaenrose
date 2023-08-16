const button = document.querySelector('.button');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const sailormoon = document.querySelector('.sailormoon');
const sailormoonup = document.querySelector('.sailormoonup');



button.addEventListener('click', ()=> {
  search.classList.toggle('active'),
  sailormoonup.classList.toggle('active'),
  input.focus()
  sailormoon.classList.remove('sailormoon')

  if (search.classList.contains('active')) {
    input.placeholder = 'Searching...';
  } else {
    input.placeholder = '';
    sailormoon.classList.toggle('sailormoon')
  }
});
