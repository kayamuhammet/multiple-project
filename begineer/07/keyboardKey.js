const key = document.getElementById('text-input');
const keyInfo = document.getElementById('key-info');

key.addEventListener('keyup', (e) => {
    keyInfo.textContent = `Last character: ${e.key} | Full Text: ${key.value}`
})