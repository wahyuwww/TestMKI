let capacity = 500;

let items = [
  { w: 70, v: 135 },
  { w: 73, v: 139 },
  { w: 77, v: 149 },
  { w: 80, v: 150 },
  { w: 82, v: 156 },
  { w: 87, v: 163 },
  { w: 90, v: 173 },
  { w: 94, v: 184 },
  { w: 98, v: 192 },
  { w: 106, v: 201 },
  { w: 110, v: 210 },
  { w: 113, v: 214 },
  { w: 115, v: 221 },
  { w: 118, v: 229 },
  { w: 120, v: 240 },
];

const knapSack = (item, capacity) => {
  let memo = [];
  for (let i = 0; i < items.length; i++) {
    let row = [];
    for (let cap = 1; cap <= capacity; cap++) {
      row.push(getSubset(i, cap));
    }
    memo.push(row);
  }
  const getLast = () => {
    let lastRow = memo[memo.length - 1];
    return lastRow[lastRow.length - 1];
  };
  return getLast();

  function getSubset(row, capy) {
    const notSolution = { maxValue: 0, subset: [] };
    let col = capy - 1;
    let lastItem = item[row];
    let remaining = capy - lastItem.w;
    let lastSolution =
      row > 0 ? memo[row - 1][col] || notSolution : notSolution;
    let lastSubSolution =
      row > 0 ? memo[row - 1][remaining - 1] || notSolution : notSolution;

    if (remaining < 0) {
      return lastSolution;
    }
    let lastValue = lastSolution.maxValue;
    let lastSubValue = lastSubSolution.maxValue;

    let newValue = lastSubValue + lastItem.v;
    if (newValue >= lastValue) {
      let lastSubSet = lastSubSolution.subset.slice();
      lastSubSet.push(lastItem);
      return { maxValue: newValue, subset: lastSubSet };
    } else {
      return lastSolution;
    }
  }
};

console.log(knapSack(items, capacity));
