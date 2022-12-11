// utils/index.ts
var foo = 2;
var sum = (a, b) => a + b;
var fibonacci = (n) => {
  if (n <= 1)
    return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
export {
  fibonacci,
  foo,
  sum
};
