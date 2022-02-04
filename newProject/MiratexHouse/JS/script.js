let offset = 0;
const sliderline = document.querySelector('.slider-track');

document.querySelector('.btn-next').addEventListener('click', function() {
    offset = offset + sliderline.clientWidth;
    if (offset > 12000) {
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function() {
    offset = offset - sliderline.clientWidth;
    if (offset < 0) {
        offset = 11997;
    }
    sliderline.style.left = -offset + 'px';
});





function showBenefits1 (el) {
    if(document.querySelector('.benefitsScroolDiv1').clientHeight === 90) {
        document.querySelector('.benefitsScroolDiv1').style.height = "100%";
    } else {
        document.querySelector('.benefitsScroolDiv1').style.height = "90px";
        
    }
}

function showBenefits2 (el) {
    if(document.querySelector('.benefitsScroolDiv2').clientHeight === 90) {
        document.querySelector('.benefitsScroolDiv2').style.height = "100%";
    } else {
        document.querySelector('.benefitsScroolDiv2').style.height = "90px";
        
    }
}
