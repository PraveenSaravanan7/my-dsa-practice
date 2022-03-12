function simplifyPath(path: string): string {
  const realPath = path.split("/").filter((val) => !["", "."].includes(val));
  const stack: string[] = [];

  for (const cand of realPath) {
    if (cand === "..") stack.pop();
    else stack.push(cand);
  }

  return "/" + stack.join("/");
}

//  /home/../foo/
// home, .. , foo
