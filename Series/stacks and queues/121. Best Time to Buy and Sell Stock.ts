function maxProfit(prices: number[]): number {
  let max = 0;
  let i = prices.length - 1;
  let j = prices.length - 1;

  while (i > -1) {
    const currentProfit = prices[j] - prices[i];
    if (currentProfit > 0) {
      max = Math.max(currentProfit, max);
    } else {
      j = i;
    }
    i--;
  }

  return max;
}

//1 6 2 3 4 7
