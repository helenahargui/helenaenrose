const loadText = document.querySelector('.loading-text');
const sailorContainer = document.querySelector('.sailor-container');
const bg = document.querySelector('.bg');

const totalLoadTime = 7000; // Total time in milliseconds

const sailorTimeIntervals = [
  totalLoadTime / 7,
  totalLoadTime * 2 / 7, 
  totalLoadTime * 3 / 7,
  totalLoadTime * 4 / 7,
  totalLoadTime * 5 / 7,
  totalLoadTime * 6 / 7,
  totalLoadTime
];

let load = 0;
let currentSailorIndex = 0;
let int = setInterval(blurringAndShowSailors, totalLoadTime / 100);

function blurringAndShowSailors() {
  load++;
  if (load > 100) {
    clearInterval(int);
  }
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
}


const sailors = document.querySelectorAll('.sailor');
let currentSailor = 0;

function showSailor() {
  // Hide previous sailor
  if(sailors[currentSailor - 1] !== undefined){
    sailors[currentSailor - 1].style.opacity = 0; 
  } 
  // Show current sailor
  if(currentSailor < sailors.length){
    sailors[currentSailor].style.opacity = 1;
  }
  
  // Increment for next sailor
  currentSailor++;
  // Loop back to first sailor and hide the last sailor
  if(currentSailor > sailors.length) {
    sailors[sailors.length - 1].style.opacity = 0; // Hide the last sailor
    currentSailor = 0; 
  }
}

setInterval(showSailor, totalLoadTime / 7);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
