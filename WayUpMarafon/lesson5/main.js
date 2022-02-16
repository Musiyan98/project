const   option1 = document.querySelector('.option1'),
        option2 = document.querySelector('.option2'),
        option3 = document.querySelector('.option3'),
        option4 = document.querySelector('.option4');

const optionsElements = document.querySelectorAll('.option');

const question = document.getElementById('question');

const   numberOfQuestion = document.getElementById('number-of-question'),
        numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');
const btnTryAgain = document.getElementById('btn-try-again');

let score = 0;

const   correctAnswer = document.getElementById('correct-answer'),
        numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2') ;


const questions = [
    {
        question: 'Мій улюблений предмет в школі?',
        options: [
            'Математика',
            'Фізкультура',
            'Хімія',
            'Економіка'
        ],
        rightAnswer: 0
    },
    {
        question: 'На якому музичному інструменті я граю?',
        options: [
            'Баян',
            'Піаніно',
            'Гітара',
            'Флейта'
        ],
        rightAnswer: 2
    },
    {
        question: 'Скільки мені років?',
        options: [
            '19',
            '23',
            '27',
            '35'
        ],
        rightAnswer: 1
    },
    {
        question: 'Яка моя улюблена Книга?',
        options: [
            'Гарі Поттер',
            'Воно',
            'Кладовище домашніх тварин',
            'Відьмак'
        ],
        rightAnswer: 3
    }
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML =  indexOfPage + 1;   
    indexOfPage++;
};

completedAnswer = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDublicate = false;

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if (completedAnswer.length > 0) {
            completedAnswer.forEach(item => {
                if (item == randomNumber) {
                    hitDublicate = true;
                }
            });
            if (hitDublicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if (completedAnswer.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswer.push(indexOfQuestion);
};

const cheakAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    dissabledOptions();
};

const dissabledOptions = () => {
    optionsElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
};

    const anableOptions = () => {

        optionsElements.forEach(item => {
            item.classList.remove('disabled', 'correct', 'wrong');
        });
    };

    const answerTracker = () => {
        questions.forEach(() => {
            const div = document.createElement('div');
            answersTracker.appendChild(div);
        })
    };

    const updateAnswerTracker = status  => {
        answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
    };

    const validate = () => {
        if (!optionsElements[0].classList.contains('disabled')) {
            alert('Вам потрібно вибрати один варіант!')
        } else {
            randomQuestion();
            anableOptions();
        }
    };

    btnNext.addEventListener('click', () => {
        validate();
    })


for (option of optionsElements) {
    option.addEventListener('click', e => cheakAnswer(e))
};


const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
})

