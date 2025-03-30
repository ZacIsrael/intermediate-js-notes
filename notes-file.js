// Intermediate Javascript

// Import the readline module
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