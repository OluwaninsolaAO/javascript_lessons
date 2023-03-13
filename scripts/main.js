let greeting = document.querySelector('#greeting');
let action = document.querySelector('#action');

action.onclick = () => {
    let name = prompt(`Enter your name please.`);

    while (!name)
        name = prompt(`You must enter your name please.`);
    greeting.textContent = `Hello there ${name}!`;
}