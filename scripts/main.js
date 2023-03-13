// Variables
let greeting = document.querySelector('#greeting');
let action = document.querySelector('#action');
let forget = document.querySelector('#forget');

// Onload -- the follwoing commands load with the page
greeting.textContent = `Hello there ${localStorage.getItem('name') === null ? "Stranger" : localStorage.getItem('name') }!`;

// Event listeners
action.onclick = () => {
    let name = prompt(`Enter your name please.`);
    greetUser(name);
}

forget.onclick = () => {
    localStorage.removeItem('name');
    greetUser('Stranger');
}

// Handful functions
function greetUser(name) {
    if (name === null || name === '')
        return;
    else
        localStorage.setItem('name', name);
    
    greeting.textContent = `Hello there ${localStorage.getItem('name') === null ? "Stranger" : localStorage.getItem('name') }!`;
}