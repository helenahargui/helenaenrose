// script.js

const loadText = document.querySelector('.loading-text');
const sailorContainer = document.querySelector('.sailor-container');
const bg = document.querySelector('.bg');

const totalLoadTime = 7000; // Total time in milliseconds

// Define sailor appearance time intervals (1/6 of total time for each sailor)
const sailorTimeIntervals = [
  totalLoadTime / 7,
  totalLoadTime * 2 / 7,
  totalLoadTime * 3 / 7,
  totalLoadTime * 4 / 7,
  totalLoadTime * 5 / 7,
  totalLoadTime * 6 / 7
];

let load = 0;
let currentSailorIndex = 0;

let int = setInterval(blurringAndShowSailors, totalLoadTime / 100);
function blurringAndShowSailors() {
  load++;
  if (load > 100) {
    clearInterval(int);
  }

  // Update background blur
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  if (load >= sailorTimeIntervals[currentSailorIndex]) {
    showNextSailor();
    currentSailorIndex++;
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

const sailors = document.querySelectorAll('.sailor');

let currentSailor = 0;

function showSailor() {

  // Hide previous sailor
  sailors[currentSailor - 1] && (sailors[currentSailor - 1].style.opacity = 0);  

  // Show current sailor
  sailors[currentSailor].style.opacity = 1;

  // Increment for next sailor
  currentSailor++;

  // Loop back to first sailor
  if(currentSailor >= sailors.length) {
    currentSailor = 0; 
  }

}

// Show next sailor every second
setInterval(showSailor, totalLoadTime / 7,);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
