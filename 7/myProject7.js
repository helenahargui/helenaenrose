document.addEventListener('DOMContentLoaded', function() {
  const clothes = document.querySelector('.clothes');

  clothes.addEventListener('mouseenter', function() {
      clothes.classList.add('hidden');
  });

  clothes.addEventListener('mouseleave', function() {
      clothes.classList.remove('hidden');
  });
});
