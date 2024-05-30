const number1 = document.getElementById('numInput');
const number2 = document.getElementById('num2Input');

const buttonElement = document.getElementById('addNumButton');
const displayResult = document.getElementById('display-result');
const clearButton = document.getElementById('clear-button');

const buttonGenerateRandomNumber = document.getElementById('generate-random-number');
const displayRandom = document.getElementById('display-random-number');
const buttonClearRandomNumber = document.getElementById('clear-random-number');

function addNumbers() {
    let result = parseInt(number1.value) + parseInt(number2.value);
    console.log(result);

    displayResult.innerText = result;
};

// function addNumbers() {
//     const display = document.createElement('div');
//     display.className = 'display';
//     let displayText = document.createElement('div');

//     displayText.innerText = parseInt(number1.value) + parseInt(number2.value);
//     console.log(displayText);

//     display.appendChild(displayText);
// };

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
