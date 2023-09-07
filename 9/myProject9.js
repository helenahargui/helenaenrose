const panels = document.querySelectorAll('.panel');
const sounds=['Nice', 'OhYeah', 'Nice1', 'OhYeah1', 'Nice2', 'OhYeah2', 'Nice3'];


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();

        const sound = panel.querySelector('audio').id;
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = "Play"; 
     
        panel.appendChild(btn);

        btn.addEventListener('click', () => {
          stopSongs();
          document.getElementById(sound).play();
      });
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');

        // Remove the button when the panel becomes inactive
        const btn = panel.querySelector('.btn');
        if (btn) {
            panel.removeChild(btn);
        }
    })
}

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
