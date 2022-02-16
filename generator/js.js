const rangeTl = document.getElementById('tl');
const rangeTr = document.getElementById('tr');
const rangeBl = document.getElementById('bl');
const rangeBr = document.getElementById('br');

const resultTL = document.getElementById('resultTL');
const resultTR = document.getElementById('resultTR');
const resultBL = document.getElementById('resultBL');
const resultBR = document.getElementById('resultBR');


const input = document.querySelectorAll('.input');
const cube = document.getElementById('cube');

const total = document.getElementById('totalResult');
const btn = document.getElementById('btn');

const changeRadius = () => {
    resultTL.innerHTML = rangeTl.value;
    resultTR.innerHTML = rangeTr.value;
    resultBL.innerHTML = rangeBl.value;
    resultBR.innerHTML = rangeBr.value;

    cube.style.borderRadius = rangeTl.value + 'px' + rangeTr.value + 'px' + rangeBr.value + 'px' + rangeTr.value + 'px';
};

const totalResult = () => {
    total.innerHTML = rangeTl.value + ' ' + rangeTr.value + ' ' + rangeBr.value + ' ' + rangeTr.value + ' ';
}

for(node of input) {
    node.addEventListener('input', changeRadius)
}

btn.addEventListener('click', totalResult);

