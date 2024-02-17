/**
 * Hash Map - Matrix
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowSets = Array.from({ length: 9 }, () => new Set());
  const colSets = Array.from({ length: 9 }, () => new Set());
  const boxSets = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cand = board[i][j];
      const boxId = Math.floor(j / 3) + 3 * Math.floor(i / 3);

      if (cand === ".") continue;

      if (
        rowSets[i].has(cand) ||
        colSets[j].has(cand) ||
        boxSets[boxId].has(cand)
      )
        return false;

      rowSets[i].add(cand);
      colSets[j].add(cand);
      boxSets[boxId].add(cand);
    }
  }

  return true;
};
