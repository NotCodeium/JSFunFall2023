/**
 * Create a function named "multiply".
 * It should have two parameters: "num1" and "num2".
 * Both parameters should be numbers.
 * The function should return the product of both numbers.
 * (In other words, multiply!)
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number} num1 x num2
 *
 * @example timesFive(5); // 25
 * @example timesFive(2); // 10
 * @example timesFive(0); // 0
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const multiply = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
       throw new Error('Both parameters must be numbers.');
    }
   
    return num1 * num2;
   };
   
   console.log(multiply(5, 5));
   console.log(multiply(2, 5)); 
   console.log(multiply(0, 5));