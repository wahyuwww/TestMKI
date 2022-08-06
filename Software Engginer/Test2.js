let number = [1, 4, 2, 3, 5, 3, 2, 4];

const result = number.filter((value, index) => {
  return number.indexOf(value) == index;
});
console.log(result);