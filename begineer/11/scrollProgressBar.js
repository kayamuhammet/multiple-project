const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop; // how much scrolled
    const scrollHeight = document.documentElement.scrollHeight; // total height
    const clientHeight = document.documentElement.clientHeight; // visible height

    // calculates the percentage of how far down the page you have scrolled
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100; 

    progressBar.style.width = scrollPercent + '%';

});