document.addEventListener('DOMContentLoaded', function () {
  let isTop = true;
  let menuIsOpen = false;

  const menuIcon = document.querySelector('.va_menu_icon');

  const one = document.querySelector('#one');
  const two = document.querySelector('#two');
  const three = document.querySelector('#three');
  const four = document.querySelector('#four');

  menuIcon.addEventListener('click', function () {
      if (isTop === true) {
          showBubbles();
          isTop = false;
      } else {
          if (menuIsOpen === false) {
              showBubbles();
          } else {
              hideBubbles();
          }
      }
  });

  function showBubbles() {
      menuIcon.classList.add('is-active');

    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach((bubble) => {
        bubble.style.opacity = '1';
        bubble.style.top = '50%';
    });

    one.style.left = '150%';
    two.style.left = '250%';
    three.style.left = '350%';
    four.style.left = '450%';

      menuIsOpen = true;
  }

  function hideBubbles() {
      menuIcon.classList.remove('is-active');
      const bubbles = document.querySelectorAll('.bubble');

      bubbles.forEach((bubble) => {
          bubble.style.opacity = '0';
          bubble.style.top = '50%';
          bubble.style.left = '50%';
      });

      menuIsOpen = false;
      isTop = true;
  }

  document.querySelectorAll('.bubble').forEach(function (bubble) {
      bubble.addEventListener('click', function () {
          menuIcon.classList.remove('is-active');
          hideBubbles();
          isTop = true;
      });
  });

});

one.addEventListener('click', function () {
    document.querySelector('.first').style.zIndex = '1';
    document.querySelector('.second').style.zIndex = '0';
    document.querySelector('.third').style.zIndex = '0';
    document.querySelector('.fourth').style.zIndex = '0';
});

two.addEventListener('click', function () {
    document.querySelector('.first').style.zIndex = '0';
    document.querySelector('.second').style.zIndex = '1';
    document.querySelector('.third').style.zIndex = '0';
    document.querySelector('.fourth').style.zIndex = '0';
});

three.addEventListener('click', function () {
    document.querySelector('.first').style.zIndex = '0';
    document.querySelector('.second').style.zIndex = '0';
    document.querySelector('.third').style.zIndex = '1';
    document.querySelector('.fourth').style.zIndex = '0';
});

four.addEventListener('click', function () {
    document.querySelector('.first').style.zIndex = '0';
    document.querySelector('.second').style.zIndex = '0';
    document.querySelector('.third').style.zIndex = '0';
    document.querySelector('.fourth').style.zIndex = '1';
});



const candy = document.querySelectorAll('.candy');
const backgroundColors = ['gray', 'blue', 'white', 'yellow', 'green'];

candy.forEach((candyItem, idx) => {
    candyItem.addEventListener('click', () => eatCandy(idx));
});

function eatCandy(clickedIdx) {
    if (candy[clickedIdx].classList.contains('eaten') && !candy[clickedIdx].nextElementSibling.classList.contains('eaten')) {
        clickedIdx--;
    }
    candy.forEach((candyItem, idx) => {
        if (idx <= clickedIdx) {
            candyItem.classList.add('eaten');
        } else {
            candyItem.classList.remove('eaten');
        }
    });
    updateBackgroundColor();
    updateIndicator();
}

function updateIndicator () {
    const eatenCandy = document.querySelectorAll('.candy.eaten').length;
    const totalCandy = candy.length;
    const faceIndicator = document.querySelector('.indicator');

    if (eatenCandy === 0) {
        faceIndicator.style.visibility = 'hidden';
        faceIndicator.style.width = '0%';
    } else {
        faceIndicator.style.visibility = 'visible';
        faceIndicator.style.width = `${(eatenCandy / totalCandy) * 83}%`; 
    }
}

function updateBackgroundColor() {
    const eatenCandy = document.querySelectorAll('.candy.eaten').length;
    const fourthPage = document.querySelector('.fourth');

    fourthPage.style.backgroundColor = backgroundColors[eatenCandy-1];
}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = 0;
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 300;

    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();

})


const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

const anotherJoke = document.querySelector('.anotherJoke');
anotherJoke.addEventListener('click', () => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
        console.error(data.error);
        } else {
        const setup = data.setup;
        const delivery = data.delivery;
        const joke = data.joke;
        const setupEl = document.querySelector('.setup');
        const deliveryEl = document.querySelector('.delivery');
        const jokeEl = document.querySelector('.joke');
        if(setup && delivery) {
            setupEl.innerHTML = setup;
            deliveryEl.innerHTML = delivery;
            joke.innerHTML = '';
            } else {
            jokeEl.innerHTML = joke;
            setupEl.innerHTML = '';
            deliveryEl.innerHTML = '';
            }
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    }
);



