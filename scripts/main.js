// Variables
let greeting = document.querySelector("#greeting");
let action = document.querySelector("#action");
let forget = document.querySelector("#forget");

let need_color = document.querySelector("#need_color");
let need_color_title = document.querySelector("#need_color_title");
let primary = document.querySelector("#primary");
let secondary = document.querySelector("#secondary");
let warning = document.querySelector("#warning");
let success = document.querySelector("#success");

let need_color_default_title = need_color_title.textContent;

// Onload -- the follwoing commands load with the page
greeting.textContent = `Hello there ${
  localStorage.getItem("name") === null
    ? "Stranger"
    : localStorage.getItem("name")
}!`;

// Event listeners
action.onclick = () => {
  let name = prompt(`Enter your name please.`);
  greetUser(name);
};

forget.onclick = () => {
  localStorage.removeItem("name");
  greetUser("Stranger");
};

primary.onclick = () => {
  need_color.setAttribute("class", "bg-primary text-white");
  need_color_title.textContent = need_color_default_title;
};

secondary.onclick = () => {
  need_color.setAttribute("class", "bg-secondary text-white");
  need_color_title.textContent = need_color_default_title;
};

warning.onclick = () => {
  need_color.setAttribute("class", "bg-warning");
  need_color_title.textContent = need_color_default_title;
};

success.onclick = () => {
  need_color.setAttribute("class", "bg-success text-white");
  need_color_title.textContent = "Ah! Success is better, Thank You! 😀";
};

// Handful functions
function greetUser(name) {
  if (name === null || name === "") return;
  else localStorage.setItem("name", name);

  greeting.textContent = `Hello there ${
    localStorage.getItem("name") === null
      ? "Stranger"
      : localStorage.getItem("name")
  }!`;
}
