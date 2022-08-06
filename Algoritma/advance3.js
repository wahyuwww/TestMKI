let capacity = 500;

let items = [
  { w: 71, v: 134 },
  { w: 74, v: 138 },
  { w: 78, v: 148 },
  { w: 81, v: 159 },
  { w: 83, v: 155 },
  { w: 88, v: 162 },
  { w: 91, v: 172 },
  { w: 95, v: 183 },
  { w: 99, v: 192 },
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
