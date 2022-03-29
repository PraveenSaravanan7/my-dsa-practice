function houseRobber1(houses: number[]) {
  let max_gold = [];

  for (let i = 0; i < houses.length; i++) {
    let current = houses[i];
    let prevMax: number = max_gold[i - 1] || 0;
    let twoBackMax: number = max_gold[i - 2] || 0;

    max_gold;

    max_gold.push(Math.max(current + twoBackMax, prevMax));
  }

  return max_gold[houses.length - 1];
}

function houseRobber2(houses: number[]) {
  let currentMax = 0;
  let prevMax = 0;

  for (let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse);
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
}

// c 3
// p 0

// ch = 3 5000

// cu sum = p + ch

// c = max ()

function houseRobber3(houses: number[]): number {
  let maximun = 0;
  let prevMaximum = 0;

  for (let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(maximun, prevMaximum + currentHouse);
    prevMaximum = maximun;
    maximun = newMax;
  }

  return maximun;
}

function houseRobber4(houses: number[]): number {
  let res = 0;
  let prevRes = 0;

  for (let i = 0; i < houses.length; i++) {
    const currentHouse = houses[i];
    const newMax = Math.max(currentHouse + prevRes, res);
    prevRes = res;
    res = newMax;

    res
  }

  return res;
}

const houses = [3, 2000, 1, 2, 3, 5000];

console.log(houseRobber1(houses));
console.log(houseRobber2(houses));
console.log(houseRobber3(houses));
console.log(houseRobber4(houses));

[1, 3000];
