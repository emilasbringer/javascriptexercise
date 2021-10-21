let number = 7;
// let guess = prompt('Kan du gissa på det hemliga numret?');
let run = true;

const button = document.querySelector("#buttonElement");
const input = document.querySelector("#inputElement");
const list = document.querySelector("#listElement");

button.addEventlistener('click', (e) => {
    const inputValue = inputElement.value;
});

while (run) {
if (number == guess) {
    
    run = false;
} 
else if (number > guess) {
    alert('För litet!');
}
else {
    alert('För högt!');
}
}