let factorialCache = {};

function memoizedFactorial(n) {
  // If the result is already cached, return it
  if (factorialCache[n]) {
    console.log(`Returning cached result for ${n}!`);
    return factorialCache[n];
  }

  // Otherwise, calculate the factorial
  if (n <= 1) {
    return 1;
  } else {
    let result = n * memoizedFactorial(n - 1);
    factorialCache[n] = result; // Store the result in cache
    return result;
  }
}

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // First time, calculates
console.log(memoizedFactorial(5)); // Second time, returns cached result
console.log(memoizedFactorial(6)); // Calculates 6! (should use cached 5!)
