const prompt = require('prompt-sync')();

let isPrime = 0;
let arrayOfPrimeFactors = [];
let number = parseInt(prompt("Enter any number to print there prime factors: "));

for(i = 2; i< number; i++) {
    while(number%i == 0) {
      console.log(i);
       number = number/i;
    }
 }
 if(number >2) {
    console.log(number);
 }