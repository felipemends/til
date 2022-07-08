// const random = (number, Math) => Math.floor(Math.random() * number);

// recursive
// Finde the factorial of a number
const factorial = x => {

  // if number is 0
  if (x === 0) {
    return 1;
  }

  return x * factorial(x-1);
}

console.log(factorial(6))