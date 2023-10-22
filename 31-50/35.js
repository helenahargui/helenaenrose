const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let i = 0;

let interval = setInterval(run, 2000);

function run() {
    i++;
    changeImage();
}

leftBtn.addEventListener('click', () => {
    i--;
    changeImage();
    resetInterval();
});

rightBtn.addEventListener('click', () => {
    i++;
    changeImage();
    resetInterval();
});

function changeImage() {
    if (i > img.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = img.length - 1;
    } else {
        imgs.style.transform = `translateX(${-i * 330}px)`;
    }
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

