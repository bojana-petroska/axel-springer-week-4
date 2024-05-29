// const inputElement = document.getElementById('user-input');
// const buttonElement = document.getElementById('submit-button');

// buttonElement.addEventListener('click', function() {
//     const inputValue = inputElement.value;
//     alert(`Hello ${inputValue}`);
// });

// const correctNumber = Math.floor(Math.random() * 10) + 1;

// buttonElement.addEventListener('click', function () {
//     while (true) {
//         // Get the user input and parse it as an integer
//         const inputValue = parseInt(inputElement.value);
//         // Check if the input is a valid number
//         if (!isNaN(inputValue)) {
//             // Check if the guessed number is correct
//             if (inputValue === correctNumber) {
//                 alert("Congratulations! You guessed the correct number.");
//                 break; // Exit the loop if the guess is correct
//             } else if (inputValue > correctNumber) {
//                 alert("Too big!");
//             } else if (inputValue < correctNumber) {
//                 alert('too small')
//             } else {
//                 alert("Sorry, try again.");
//             }
//         } else {
//             alert("Please enter a valid number.");
//         }
//         // Allow the user to enter a new value after an incorrect guess or invalid input
//         break;
//     }
// });



    // Array of quote objects
    const quotes = [
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        }
    ];

// Function to generate a random quote
// function generateRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     return randomQuote;
// }

//  // Function to display the quote on the webpage
//  function displayQuote() {
//     const quoteElement = document.getElementById('quote');
//     const randomQuote = generateRandomQuote();
//     quoteElement.innerHTML = `"${randomQuote.text}"<br>- ${randomQuote.author}`;
// };

//  // Event listener for the button click
//  const quoteButton = document.getElementById('quoteButton');
//  quoteButton.addEventListener('click', displayQuote);

 const taskInput = document.getElementById('taskInput');
 const addTaskButton = document.getElementById('addTaskButton');
 const taskList = document.getElementById('taskList'); 
 
 function addTask(taskText) {
     const taskItem = document.createElement('div');
     taskItem.className = 'taskItem';
     
     const taskTextElement = document.createElement('div');
     taskTextElement.innerText = taskText;
     console.log(taskInput.value);
     
     const deleteButton = document.createElement('button');
     deleteButton.innerText = 'Complete';
     deleteButton.addEventListener('click', function () {
         taskItem.remove();
        });
        
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
    
    addTaskButton.addEventListener('click', function () {
        if (taskInput.value !== "") {
            addTask(taskInput.value);
        }

        taskInput.value = "";
});


