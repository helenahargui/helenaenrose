const parts = document.querySelectorAll('.part');
window.addEventListener('scroll', checkParts);

checkParts();

function checkParts() {
  const triggerBottom = window.innerHeight * 0.8; // 80% of the viewport height

  parts.forEach(part => {
    const partTop = part.getBoundingClientRect().top;

    if (partTop < triggerBottom) {
      part.classList.add('show');
    } else {
      part.classList.remove('show');
    }
  });
}