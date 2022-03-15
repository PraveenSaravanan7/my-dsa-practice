function isHappy(n: number): boolean {
  const getNumber = (num: number): number => {
    let sum = 0;

    while (num !== 0) {
      const lastNumber = num % 10;
      num = Math.floor(num / 10);
      sum += Math.pow(lastNumber, 2);
    }

    return sum;
  };

  let fast = n;
  let slow = n;

  while (true) {
    fast = getNumber(getNumber(fast));
    slow = getNumber(slow);

    if (fast === slow) return fast === 1;
  }
}
