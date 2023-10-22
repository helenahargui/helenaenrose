const screens = document.querySelectorAll('.screen');
const choose_cat_btns = document.querySelectorAll('.choose-cat-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.querySelector('.game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_cat_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        localStorage.setItem('selected-cat', src);
        localStorage.setItem('selected-cat-alt', alt);
        screens[1].classList.add('up');
        setTimeout(createRandomCat, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function createRandomCat() {
    const cat = document.createElement('div');
    cat.classList.add('cat');
    const { x, y } = getRandomLocation();
    cat.style.top = `${y}px`;
    cat.style.left = `${x}px`;
    cat.innerHTML = `<img src="${localStorage.getItem(
        'selected-cat'
    )}" alt="${localStorage.getItem('selected-cat-alt')}" style="transform: rotate(${Math.random() * 360}deg)" />`;
    cat.addEventListener('click', catchCat);
    game_container.appendChild(cat);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchCat() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 1000);
    addCats();
}

function addCats() {
    setTimeout(createRandomCat, 1000);
    setTimeout(createRandomCat, 1500);
}

function increaseScore() {
    score++;
    if (score > 19) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}

