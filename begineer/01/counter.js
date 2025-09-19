const btnUp = document.getElementById("counterUp");
const btnDown = document.getElementById("counterDown");
const btnReset = document.getElementById("counterReset");

const counterP = document.getElementById("counter");
let counter = 0;

btnUp.addEventListener('click', () => {
    counter++;
    counterP.textContent = counter;
});

btnDown.addEventListener('click', () => {
    if( counter === 0)
        return;
    counter--;
    counterP.textContent = counter;
});

btnReset.addEventListener('click', () => {
    counter = 0;
    counterP.textContent = counter;
});
