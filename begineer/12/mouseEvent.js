const mousePosition = document.getElementById('mousePosition');

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    mousePosition.textContent = `X: ${x}, Y: ${y}`;
})