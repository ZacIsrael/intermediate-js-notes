// Intermediate Javascript

// Import the readline module
const { error } = require("console");
const readline = require("readline");

// Random Number Generation
// generates a random number between 0 & 0.99999999999
let n = Math.random();
// n will be a different number every time this code is run
console.log(`n = ${n}`);

// multiplies n by 6 (n will never be greater than 6)
n = n * 6;
console.log(`Multiplied n by 6. n = ${n}`);

// round n down to the nearest whole number 
n = Math.floor(n);
console.log(`Rounded n down to the nearest whole number\nn = ${n}`);

// creates an interface that will read the user input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Love Calculator challenge
// prompt that'll appear on the command line
rl.question("Enter two names, separate them with a ',': ", (names) => {
  
    // retrieve the 2 names from the command line, the 2 names are separated by a comma 
    let [name1, name2] = names.split(',');
   
    // remove white spaces from the beginning and end of each name (just in case the user added some spaces by mistake)
    name1 = name1.trim();
    name2 = name2.trim();

    // generates a random number between 0 & 0.99999999999
    let n = Math.random();
    
    // multiplies n by 100 (n will never be greater than 100)
    n = n * 100;

    // round n down to the nearest whole number 
    n = Math.floor(n);

    console.log(`${name1} & ${name2} have a ${n}% chance of being together.`);
    
    
    // close interface after recieving the input from the command line.
    rl.close();
  });

  function bmiCalculator (weight, height) {
    
    let interpretation = '';
    
    // Calculate bmi 
    let bmi = weight / (height * height);
    console.log ('bmi = ', bmi);
    
    // set message based on bmi
    if (bmi < 18.5){
        interpretation = `Your BMI is ${bmi}, so you are underweight.`;
        
    } else if ((bmi >= 18.5) && (bmi <= 24.9)){
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }
    
    return interpretation;
}

// A year is a leap year if it is evenly divisible by 4 ; 
// except if that year is also evenly divisible by 100; 
// unless that year is also evenly divisible by 400.

// return 'Leap year.' if the year is a leap year and 'Not leap year.' if it is not
function isLeap(year) {
    
  /**************Don't change the code above****************/  
  // check if the year paramater is a Number
  if(typeof(year) !== 'number'){
    throw error('Please enter a valid year');
  }
  //Write your code here.   
  let message = ''; 
  // A year is a leap year if it is evenly divisible by 4 
  if(year % 4 === 0){
    // year is evenly divisible by 4
    if ((year % 100 === 0) && (year % 400 !== 0)){
      // year is evenly divisible 100 but NOT evenly divisible by 400
      message = 'Not leap year.';
    }
    // year is evenly divisble by 4 or 400 but NOT 100
    message = 'Leap year.';
    
  } else {
    // year is not evenly divisible by 4
    message = 'Not leap year.';
  }
  return message;
  /**************Don't change the code below****************/    

  }

  // 📚 What is an Array in JavaScript?
  // In JavaScript, an array is a special type of object used to store multiple 
  // values in a single variable. Arrays are ordered collections of items, 
  // where each item (element) is identified by an index starting from 0.

  // Unlike in Java, Arrays in Javascript can store values of different types (numbers, strings, objects, other arrays, etc.).
  // JavaScript provides many built-in methods to manipulate arrays.

  // Declaring arrays 
  let fruits = ["Apple", "Banana", "Mango", "Orange"];

  let numbers = new Array(5, 10, 15, 20);

  let emptyArray = [];
  emptyArray[0] = "First Element";
  emptyArray[1] = 42;

  // Multi-dimensional array
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // the value at row 1, column 2
  console.log(matrix[1][2]);  // Output: 6

  // Write a program that prints the numbers from 1 to 100. However, for multiples of 3, 
  // print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
  // For numbers that are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz (start, end){
    let i = start;
    while (i <= end){
      if(start === 0) {
        i++;
        continue;
      }
      if ((i % 3 !== 0) && (i % 5 !== 0)){
        // i is not evenly divisible by 3 or 5
        console.log(i);
      } else if((i % 3 === 0) && (i % 5 !== 0)){
        // i is evenly divisible by 3 but not 5
        console.log('Fizz');
      } else if ((i % 3 !== 0) && (i % 5 === 0)){
        // i is evenly divisible by 5 but not 3
        console.log('Buzz');
      } else if ((i % 3 === 0) && (i % 5 === 0)){
        // i is evenly divisible by 5 but & 3
        console.log('FizzBuzz');
      }
      // increment i
      i++;
    }
  }


  fizzBuzz(0, 30);

  // ChatGPT's version of FizzBuzz
  function fizzBuzzChatGPT(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');  // Divisible by both 3 and 5
      } else if (i % 3 === 0) {
        console.log('Fizz');  // Divisible by 3
      } else if (i % 5 === 0) {
        console.log('Buzz');  // Divisible by 5
      } else {
        console.log(i);  // Not divisible by either 3 or 5
      }
    }
  }
  
  // Call the function with the default FizzBuzz range
  fizzBuzzChatGPT(1, 100);
  

