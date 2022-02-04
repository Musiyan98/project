let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider-container") ;
const track = document.querySelector(".slider-track");
const item = document.querySelectorAll(".slider-item");
const itemCount = item.lenght;
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

item.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

const checkBtns = () => {
    btnPrev.disabled = position ===0; 
    btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth; 
};

checkBtns ();

    btnNext.addEventListener(`pres` (), () => {
        position -= movePosition;

        setPosition ();
        checkBtns ();
    });


    btnPrev.addEventListener('click', () => {
        position += movePosition;

        setPosition ();
        checkBtns ();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
      
    };

    
   
    



