function countAndSay(n: number): string {
  let res = "1";
  let newSlate = "";

  const rec = (slate: string, l: number) => {
    if (l === n) {
      res = slate;
      return;
    }
    newSlate = "";
    for (let i = 0; i < slate.length; i++) {
      let j = i;
      while (slate[i] === slate[j]) {
        j++;
      }
      const count = j - i;
      newSlate += count + slate[i];
      i = j - 1;
    }
    rec(newSlate, l + 1);
  };

  rec(res, 1);

  return res;
}

console.log(countAndSay(4));

// function countAndSay(n: number): string {
//   return countAndSay(n);
//   function countAndSay(n: number): string {
//     if (n === 1) {
//       return "1";
//     } else {
//       return say(countAndSay(n - 1));
//     }
//   }

//   function say(string: string) {
//     let result = "";
//     let count = 1;
//     for (let i = 0; i < string.length; i++) {
//       if (i == string.length - 1) {
//         result = result + count + string[i];
//       } else if (string[i] === string[i + 1]) {
//         count++;
//       } else {
//         result = result + count + string[i];
//         count = 1;
//       }
//     }
//     return result;
//   }
// }
