const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const subtabs = document.getElementById('subtabs');
const subcontents = document.querySelectorAll('.subcontent');



const changeClass = (el, clas) => {
    for (let i = 0; i < clas.children.length; i++) {
        clas.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', (event) => {
    const currTab = event.target.dataset.btn;
    changeClass(event.target, tabs);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if(contents[i].dataset.content === currTab) {
            contents[i].classList.add('active');
        }
    }
});


subtabs.addEventListener('click', (event) => {
    const currTab = event.target.dataset.subbtn;
    changeClass(event.target, subtabs);
    for (let i = 0; i < subcontents.length; i++) {
        subcontents[i].classList.remove('active');
        if(subcontents[i].dataset.subcontent === currTab) {
            subcontents[i].classList.add('active');
        }
    }
});



