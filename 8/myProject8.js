labels = document.querySelectorAll('.form-control label');
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) =>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

document.querySelector('#username').addEventListener('input',function() {
  const username = document.querySelector('#username');
  const feedback = document.querySelector('.feedback'); 
  if (username.value.length >= 3) {
    feedback.classList.add('active');
} else {
  feedback.classList.remove('active');
}
})








