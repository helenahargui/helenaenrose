const open = document.getElementById('open');
const close = document.getElementById('close');
const cakes = document.querySelector('.cakes');
const container = document.querySelector('.container');


open.addEventListener('click', ()=> container.classList.add('show-nav'));
close.addEventListener('click', ()=> container.classList.remove('show-nav'));

open.addEventListener('click', ()=> cakes.classList.add('cakesdown'));
open.addEventListener('click', ()=> cakes.classList.remove('cakes'));
close.addEventListener('click', ()=> cakes.classList.remove('cakesdown'));
close.addEventListener('click', ()=> cakes.classList.add('cakes'));