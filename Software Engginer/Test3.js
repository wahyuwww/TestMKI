
let num = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const findMissingNumber = (data) => {
  let missing = [];
  for (let i = 1; i <= data.length; i++) {
    if (data.indexOf(i) === -1) {
      missing.push(i);
    }
    }
    return missing;
};
console.log(findMissingNumber(num));
