const flat = (obj: any) => {
  const res: Record<string, any> = {};
  const queue = [{ obj: obj, name: "" }];

  while (queue.length) {
    console.log(queue);
    const cand = queue.pop() as typeof queue[0];

    if (typeof cand?.obj === "object") {
      Object.keys(cand.obj).forEach((key) => {
        queue.push({ obj: cand.obj[key], name: cand.name + "." + key });
      });
    } else {
      res[cand.name.replace(".", "")] = cand.obj;
    }
  }

  return res;
};

console.log(flat({ a: { c: 2, x: 5, d: { v: "ccc" } }, b: 1 }));
