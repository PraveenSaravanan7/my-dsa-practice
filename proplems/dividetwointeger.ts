function divide(dividend: number, divisor: number): number {
  let sign = 1;

  if (dividend < 0) {
    sign *= -1;
    dividend = Math.abs(dividend);
  }

  if (divisor < 0) {
    sign *= -1;
    divisor = Math.abs(divisor);
  }
  let quotient = 0;

  if (divisor === 1) quotient = dividend;

  while (dividend >= divisor && divisor > 1) {
    dividend -= divisor;
    quotient++;
  }

  quotient *= sign;

  if (quotient > 2 ** 31 - 1) return 2 ** 31 - 1;
  if (quotient < -1 * 2 ** 31) return -1 * 2 ** 31;

  return quotient;
}

console.log(divide(-2147483648, -1));
