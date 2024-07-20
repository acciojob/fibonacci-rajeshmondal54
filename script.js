function fibonacci(num) {
// your code here
	  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= num; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
}
module.exports = fibonacci;
