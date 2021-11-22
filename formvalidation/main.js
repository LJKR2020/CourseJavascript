const username = document.getElementById('username');
const usernamewarning = document.getElementById('usernamecheck');
const password = document.getElementById('passwordinput');
const passwordwarning = document.getElementById('passwordcheck');

function validateEmail(e) {
    if (e.target.value.includes('@')) {
        usernamewarning.textContent = 'Gebruikersnaam mag geen @ bevatten'
    }
    else {
        usernamewarning.textContent = '';
    }
}

function validatePassword(e) {
    if (e.target.value === '' || e.target.value.length < 6) {
        passwordwarning.textContent = 'Wachtwoord is tekort, gebruik minimaal 6 tekens'
    } else {
        passwordwarning.textContent = '';
    }
}

username.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', validatePassword);