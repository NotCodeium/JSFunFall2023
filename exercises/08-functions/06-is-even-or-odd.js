/**
 * Create a function called "isEvenOrOdd".
 * If given an even number, it should return "even".
 * If given an odd number, it should return "odd".
 *
 * @param {number} num
 * @returns {string} either "even" or "odd"
 *
 * @example isEvenOrOdd(10); // even
 * @example isEvenOrOdd(3); // odd
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const isEvenOrOdd = (num) => {
    if (typeof num !== 'number') {
       throw new Error('Input must be a number');
    }
   
    return num % 2 === 0 ? 'even' : 'odd';
   };
   
   console.log(isEvenOrOdd(10));
   console.log(isEvenOrOdd(3));