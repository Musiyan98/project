// ALL ANSWER OPTIONS
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

/* ALL OUR OPTIONS*/

const optionElements = document.querySelectorAll('.option');
// console.log(optionElements);
//  сам вопрос
const question = document.getElementById('question');  
// номер вопроса
const numberOfQuestion = document.getElementById('number-of-question'),
    // к-во всех вопросов
    numberOfAllQuestions = document.getElementById('number-of-all-questions'); 

    // индекс страницы
let indexOfQuestion,
    // индекс текущего вопроса
    indexOfPage = 0;

    // обёртка для трекера
const answersTracker = document.getElementById('answers-tracker');
    // кнопка Далее 
const btnNext = document.getElementById('btn-next');
// МОДАЛЬНОЕ ОКНО
// итоговый результат викторины
let score = 0;
// к-во правильных ответов
const correctAnswer = document.getElementById('correct-answer'),
//  к-во всех вопросов в модальном окне
    numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
//  кнопка "начать заново"
    btnTryAgain = document.getElementById('btn-try-again');
// массив с вопросами
const questions = [
    {
        question: 'Как в Java Script вычислить процент от числа ?',
        options: [
            'Так в Java Script нельзя сделать',
            'Оператор : % ',
            'Умножить на к-во процентов и разделить на 100',
            'Вызвать метод findPrecent()',
        ],
        rightAnswer: 2
    },
    {
        question: 'Результат выражения "13" + 7',
        options: [
            '20',
            '137',
            'undefined',
            'error',
        ],
        rightAnswer: 1
    },
    {
        question: 'На Java Script нельзя писать',
        options: [
            'Игры',
            'Скрипты для сайтов',
            'Десктопные приложения',
            'Плохо',
        ],
        rightAnswer: 3
    }
];

// выводим к-во вопросов
numberOfAllQuestions.innerHTML = questions.length; 

// функция при инициализации страницы
const load = () => {
    // сам вопрос
    question.innerHTML = questions[indexOfQuestion].question;
    
    // мапим ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];
    //  установка номера текущей страницы
    numberOfQuestion.innerHTML = indexOfPage + 1;
    // увеличение индекса страницы
    indexOfPage++;
};
// массив для уже заданных вопросов
let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    // console.log(randomNumber);
    //  якорь для проверки одинаковых вопросов
    let hitDuplicate = false;

    if (indexOfPage == questions.length) {
        quizOver()
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if (completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const quizOver = () => {
    console.log('Конец игры');

}
// функция не запускается до загрузки сираницы
window.addEventListener('load', () => {
    randomQuestion();
    });
