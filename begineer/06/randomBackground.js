const randomBackgroundBtn = document.querySelector(".random-background-btn");
const body = document.querySelector("body");

randomBackgroundBtn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;
    
})