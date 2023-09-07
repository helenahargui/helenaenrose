const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

document.querySelector('#username').addEventListener('input', function() {
    const username = document.querySelector('#username');
    const feedback = document.querySelector('.form-control input[type="text"] + label + .feedback');

    if (username.value.length >= 3) {
        feedback.classList.add('active');
    } else {
        feedback.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // const form = document.querySelector('.form');
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Fetch the JSON data (assuming it's located at '/data.json')
        fetch('users.json')
            .then(response => response.json())
            .then(users => {
                const userFound = users.some(user => user.username === username && user.password === password);

                if (userFound) {
                    // If user found, redirect to the desired page
                    window.location = 'dashboard.html';
                } else {
                    // Handle login failure (e.g., display an error message)
                    alert('Invalid username or password!');
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    });
});
