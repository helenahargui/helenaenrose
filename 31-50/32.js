const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (cheap === theClickedOne) {
        fast.checked = false
        }
    
        if (fast === theClickedOne) {
        good.checked = false
        }
    
        if (good === theClickedOne) {
        cheap.checked = false
        }
    }
    }