//write a function that calculates the factorialof a given number.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let result = factorial(3);
console.log(result);
