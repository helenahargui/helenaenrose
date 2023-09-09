const surpriseTitle = document.getElementById('surprise-title');
const surpriseText = document.getElementById('surprise-text');
const surpriseBtn = document.getElementById('surpriseBtn');
const giftsTitle = document.getElementById('gifts-title');
const giftsText = document.getElementById('gifts-text');
const giftsBtn = document.getElementById('giftsBtn');
const faqWLS = document.getElementById('warming-little-surprises');

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})

// Set button text
surpriseBtn.innerText = "Show Another Surprise";
giftsBtn.innerText = "Show Another Gift Idea";

// Event listeners
surpriseBtn.addEventListener('click', generateSurprise);
giftsBtn.addEventListener('click', generateGiftIdeas);

generateSurprise();
generateGiftIdeas();

async function generateSurprise() {
    const res = await fetch('text.json');
    const data = await res.json();

    const randomSurprise = data.WarmingLittleSurprises[Math.floor(Math.random() * data.WarmingLittleSurprises.length)];

    surpriseTitle.innerHTML = randomSurprise.title;
    surpriseText.innerHTML = randomSurprise.description;

    let opacity = 0;
    setInterval(() => {
        setOpacity(opacity,randomSurprise);
        opacity += 0.05;
    },100)
}

function setOpacity(opacity,randomSurprise) {
    if(opacity<=0.5){
        faqWLS.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity})), url(${randomSurprise.backgroundImg})`;
    }
}

async function generateGiftIdeas() {
    const res = await fetch('text.json');
    const data = await res.json();
    
    const randomGift = data.GiftIdeasForNewlyWeds[Math.floor(Math.random() * data.GiftIdeasForNewlyWeds.length)];
    
    giftsTitle.innerHTML = randomGift.title;
    giftsText.innerHTML = randomGift.description;
}
