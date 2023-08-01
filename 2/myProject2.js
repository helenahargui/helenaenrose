const progress = document.getElementById('progress');
const addButtons = document.querySelectorAll('.addBtn');
const removeButtons = document.querySelectorAll('.remove-btn');
const itemWrappers = document.querySelectorAll('.item-wrapper');

let currentActive = 0; // Move the currentActive variable outside of the click event listener

addButtons.forEach((addButton, index) => {
  addButton.addEventListener('click', () => {
    removeButtons[index].classList.toggle('active');

    itemWrappers.forEach((wrapper, i) => {
      if (i === index) {
        wrapper.classList.add(`upload${index}`);
        currentActive = index + 1; // Update the currentActive value
        addButton.style.display = 'none'; // Hide the addBtn when clicked
        update();
      } 
    });
  });
});

removeButtons.forEach((removeButton, index) => {
  removeButton.addEventListener('click', () => {
    removeButtons[index].classList.remove('active');

    itemWrappers.forEach((wrapper, i) => {
      if (i === index) {
        wrapper.classList.remove(`upload${index}`);
        currentActive = index; // Update the currentActive value
        addButtons[index].style.display = 'block'; // Show the corresponding addBtn when remove-btn is clicked
        update();
      }
    });
  });
});

function update() {
  addButtons.forEach((addBtn, idx) => {
    if (idx < currentActive) {
      addBtn.classList.add('progressing');
    } else {
      addBtn.classList.remove('progressing');
    }
  });

  const progressingBars = document.querySelectorAll('.progressing');
  progress.style.width = (progressingBars.length - 1) / (addButtons.length - 1) * 100 + '%';
}
