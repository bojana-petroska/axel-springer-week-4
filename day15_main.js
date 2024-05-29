const number1 = document.getElementById('numInput');
const number2 = document.getElementById('num2Input');

const buttonElement = document.getElementById('addNumButton');
const displayResult = document.getElementById('display-result')
const clearButton = document.getElementById('clear-button');
const displayRandom = document.getElementById('display-random-number')

const buttonGenerateRandomNumber = document.getElementById('generate-random-number')
const buttonClearRandomNumber = document.getElementById('clear-random-number')

function addNumbers() {
    const inputNum = number1.value;
    const inputNum2 = number2.value;

    result = parseInt(inputNum) + parseInt(inputNum2);

    displayResult.innerText = result;
};

buttonElement.addEventListener('click', function() {
    addNumbers();
    console.log('hiiiiiii bo');
});

clearButton.addEventListener('click', function() {
    number1.value = "";
    number2.value = "";
    displayResult.innerText = "display the sum here";
});

buttonGenerateRandomNumber.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100);
    displayRandom.innerText = randomNumber;
    console.log(randomNumber);
});

buttonClearRandomNumber.addEventListener('click', function() {
    displayRandom.innerText = "display random number here"
});


