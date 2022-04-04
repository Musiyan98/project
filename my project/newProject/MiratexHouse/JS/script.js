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
        document.querySelector('#benefits-buttom1').style.opacity = 0;
        document.querySelector('#benefits-buttom1').style.visibility = "hidden"
        document.querySelector('#benefits-buttom1-2').style.opacity = 1;
        document.querySelector('#benefits-buttom1-2').style.visibility = "visible"

    }    else {
            document.querySelector('.benefitsScroolDiv1').style.height = "90px";
            document.querySelector('#benefits-buttom1-2').style.opacity = 0;
            document.querySelector('#benefits-buttom1-2').style.visibility = "hidden"
            document.querySelector('#benefits-buttom1').style.opacity = 1;
            document.querySelector('#benefits-buttom1').style.visibility = "visible"
        }
}

function showBenefits2 (el) {
    if(document.querySelector('.benefitsScroolDiv2').clientHeight === 90) {
        document.querySelector('.benefitsScroolDiv2').style.height = "100%";
        document.querySelector('#benefits-buttom2').style.opacity = 0;
        document.querySelector('#benefits-buttom2').style.visibility = "hidden"
        document.querySelector('#benefits-buttom2-2').style.opacity = 1;
        document.querySelector('#benefits-buttom2-2').style.visibility = "visible"
    }   else {
            document.querySelector('.benefitsScroolDiv2').style.height = "90px";
            document.querySelector('#benefits-buttom2-2').style.opacity = 0;
            document.querySelector('#benefits-buttom2-2').style.visibility = "hidden"
            document.querySelector('#benefits-buttom2').style.opacity = 1;
            document.querySelector('#benefits-buttom2').style.visibility = "visible"
        }
}




// function showcontact() {
//     if (document.querySelector('.popup').style.opacity = '0';) { 
//         document.querySelector('.popup').style.visibility = 'visible';
//         document.querySelector('.popup').style.opacity = '1';
//     }   else { 
//         document.querySelector('.popup').style.visibility = 'hidden';
//         document.querySelector('.popup').style.opacity = '0';
        
//     }

// }
