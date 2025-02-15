/**
 * Recursion involve a function calling itself to solve smaller sub-problems of a larger problem.
 */

function factorial(n) {
    // Base case
    if (n === 0) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}
  
console.log(factorial(5)); // Output: 120