// const numbers = [5, 9, 123, -6, 12.5, 23];
// const newNum = numbers.map(num => num + 2);
//console.log(newNum);

// const numAddTwo = num => num + 2
// console.log(numAddTwo(10));


// Function with Default Parameter:

// const greet = (firstName, defaultGreet = 'Hello') =>  {
//     return `${defaultGreet} ${firstName}!`;
// };

// console.log(greet('bo', 'Hola'));
// console.log(greet('bo'));

// Function with Rest Parameter:

function sum(...numbers) {
    let summaryOfNumbers = 0;
    numbers.forEach(num => summaryOfNumbers += num);   
    return summaryOfNumbers;
}

console.log(sum(10, 3, 4, 9, 12));

// Higher-order Function for Filtering:

let numbers = [10, 5, 8, 15, 3];

const filterEven = numbers.filter(number => number % 2 === 0)
console.log(filterEven)

function filterEven2(numbers) {
    const filteredNumbers = numbers.filter(number => number % 2 === 0)
    return filteredNumbers
}
console.log(filterEven2(numbers))

// 1. Write a JavaScript function named product that takes an array of numbers.
//  2. Use the reduce() method with an arrow function to calculate the product of all
// numbers in the array.
//  3. Return the product.
//  4. Call the product function with a sample array and print the result to the
// console.

// Expected output:

//  [
//     { "name": "Alice", "age": 25, "ageInTenYears": 35 },
//     { "name": "Bob", "age": 30, "ageInTenYears": 40 },
//     { "name": "Charlie", "age": 35, "ageInTenYears": 45 }
// ]

array = [2, 6, 8, 13, 20, 4, 7, 9];
const products = array.reduce((acc, curr) => acc + curr, 10);
console.log(products);


// Task 8:

// Exercise:
//  1. Define an array of objects where each object represents a person with
// properties name and age.
//  2. Write a JavaScript function named addDecade that uses map() to add a new
// property ageInTenYears to each person object, which should be their current age plus ten.
//  3. Use an arrow function within map() to handle the transformation.
//  4. Return the new array and print it to the console.

const persons = [
    { name: 'Alice', age: 25},
    { name: 'Bob', age: 30},
    { name: 'Charlie', age: 35},
];

const mappedPersons = persons.map(person => {
    person.ageInTenYears = person.age + 10
    //console.log(person)
});
console.log(persons)