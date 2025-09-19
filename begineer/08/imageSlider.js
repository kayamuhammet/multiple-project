const prev = document.getElementById('prev');
const next = document.getElementById('next');

const slideList = document.querySelectorAll('.slide');

let currentIndex = 0;

function gosterSlider(index){
    slideList.forEach(slide => {
        slide.style.display = 'none';
    });

    slideList[index].style.display = 'block';
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideList.length;
    gosterSlider(currentIndex);
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideList.length) % slideList.length;
    gosterSlider(currentIndex);
});

gosterSlider(currentIndex);