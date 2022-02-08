const disableScroll = () => {

        const widthScroll = window.innerWidth - document.body.offsetWidth;
        document.body.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hiden;
            position: fixed;
            top: -${document.body.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${widthScroll}px;
        `;
    };

    const enableScroll = () => {
        document.body.style.cssText = 'position: relative';
        window.scroll({top: document.body.scrollPosition})
    };
    
    
    
{   // Modal Page
    const presentOrderBtn = document.querySelector('.present__order-btn');
    const pageOverlayModal = document.querySelector('.page__overlay_modal');
    const modalClose = document.querySelector('.modal__close')

    const handlerModal = (openBtn, modal, openSelector, closeTrigger, sk = 'medium') => {
        
        let opacity = 0;

        const speed = {
            slow: 20,
            medium: 10,
            fast: 3,
            default: 5,
        };

        const openModal = () => {
            modal.style.opacity = opacity;
            const timer = setInterval(() => {
                opacity += 0.02;
                modal.style.opacity = opacity;
                if (opacity >= 1) clearInterval(timer);
            }, speed[sk] ? speed[sk] : speed.default);

            modal.classList.add(openSelector);
            disableScroll();
        };

        const closeModal = () => {
            const timer = setInterval (() => {
                opacity -= 0.02;
                modal.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(timer);
                    modal.classList.remove(openSelector);
                } ;
            }, speed[sk] ? speed[sk] : speed.default);

            enableScroll();
        };

        openBtn.addEventListener('click', openModal);


        closeTrigger.addEventListener('click', closeModal);

        modal.addEventListener('click', () => {
            if (event.target === modal) {
                closeModal();
            }
            
        });
    };

    handlerModal(presentOrderBtn, pageOverlayModal, 'page__overlay_modal_open', modalClose, 'medium');

}
{   // Burger Menu
    const headerContactsBurger = document.querySelector('.header__contacts-burger');
    const headerContacts = document.querySelector('.header__contacts');

    const handlerBurger = (openBtn, menu, openSelector) => {
        openBtn.addEventListener('click', () => {
            if (menu.classList.contains(openSelector)) {
                menu.style.height = '';
                menu.classList.remove(openSelector);
            } else {
                menu.style.height = menu.scrollHeight + 'px';
                menu.classList.add(openSelector);
            }
            
        })
    };

    handlerBurger(headerContactsBurger, headerContacts, 'header__contacts_open')



}

{   // Galery Modal
    const portfolioList = document.querySelector('.portfolio__list');
    const pageOverlay = document.createElement('div');

    pageOverlay.classList.add('page__overlay')

    portfolioList.addEventListener('click', (event) => {
        
        const card = event.target.closest('.card')
        
        if (card) {
            
            document.body.append(pageOverlay);
            const title = card.querySelector('.card__client')

            const picture = document.createElement('picture');
            picture.style.cssText = `
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                width: 90%;
                max-width: 1440px;
                `;
                picture.innerHTML = `

                <source srcset="${card.dataset.fullImage}.avif" type="image/avif">
                    <source srcset="${card.dataset.fullImage}.webp" type="image/webp">
                    <img src="${card.dataset.fullImage}.jpg" alt="${title.textContent}">
                `;
                
            pageOverlay.append(picture);
            

        };
        disableScroll();

    }) ;

    pageOverlay.addEventListener('click', () => {
        pageOverlay.remove();
        pageOverlay.textContent = '';
        enableScroll();

    })








}

{   // My Project
    const portfolioList = document.querySelector('.portfolio__list');
    const portfolioAdd = document.querySelector('.portfolio__add');

    const getData = () => fetch('db.json')
    
        
        .then((response) => {
            if (response.ok === true) {
                return response.json();
            } else {
                throw `что то пошло не так, попробуйте позже, ошибка ${response.status}`
            };
        })
        .catch(error => console.error(error));
    
    console.log(getData());
}

