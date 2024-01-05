var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });

// console.log(newNumbers)

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (x) {
//     return x < 10;
// });

// console.log(newNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// });

// console.log(newNumbers);

//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function (x) {
//     return x > 10;
// });

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// const newNumbers = numbers.findIndex(function (x) {
//     return x > 10;
// });

// console.log(newNumbers);

import emojipedia from "./emojipedia";

const meaning = emojipedia["meaning"].map(function (x) {
    return x;
})

console.log(x);
