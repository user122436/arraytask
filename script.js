const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
}

console.log(numbersDouble);



let number = [-5, 3, 12, -21, 2, -9, 0, 5, 8, 15];

let negativeNumbers = number.filter(function(number) {
    
    return number < 0;
});


console.log(negativeNumbers); 


let bignumber = [35, 7, 1, -6, 103, 55, 246, 521, 64, 79];

let mappedArray = bignumber.map(function(number) {
    return number < 100 ? number : null;
});

let filteredArray = mappedArray.filter(function(number) {
    return number !== null;
});

console.log(filteredArray); 


const person1 = {
    fisrtName: "Fidan",
    lastName: "Sadigzade",
    age: 13,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Fidan");},
    sayBye: function(){console.log("Goodbye!");}
}

console.log(person1);