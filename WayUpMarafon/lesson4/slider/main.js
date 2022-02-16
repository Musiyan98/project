const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDots = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const presentSlide = index => {
    activeSlide(index);
    activeDots(index);
}

const nextslide = () => {
    if (index == slides.length - 1) {
        index = 0;
        presentSlide(index);
    } else {
        index++;
        presentSlide(index);
    }
};

const prevslide = () => {
    if (index == 0) {
        index = slides.length - 1;
        presentSlide(index);
    } else {
        index--;
        presentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        presentSlide(index);
    })

})

setInterval(nextslide, 2000);

prev.addEventListener('click', prevslide)
next.addEventListener('click', nextslide)

