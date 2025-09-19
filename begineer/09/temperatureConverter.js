const inputCelcius = document.getElementById('celciusInput');
const selectTemperature = document.getElementById('selectTemperature');

const converterBtn = document.getElementById('coverterButton');
const result = document.getElementById('result');


converterBtn.addEventListener('click', () => {
    const celcius = Number(inputCelcius.value);

    const fahrenheit = (celcius * 9/5) + 32;
    const kelvin = celcius + 273.15;
    
    switch (selectTemperature.value) {
        case 'fahrenheit':
            result.textContent = `${fahrenheit} Fahrenheit (°F)`;
            break;
        case 'kelvin':
            result.textContent = `${kelvin} Kelvin (K)`;
            break;
        default :
            break;
    }
});