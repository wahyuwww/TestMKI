const input = ["flower", "flow", "flight"];

const findPrefix = (data) => {
  let result = "";
  let i = 0;
  while (i < data[0].length) {
    if (data.every((item) => item[i] === data[0][i])) {
      result += data[0][i];
    }
    i++;
  }
  return result.slice(0, i);
};
console.log(findPrefix(input));
