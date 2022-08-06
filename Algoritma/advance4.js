const getGoes = (item, step) => {
  if (typeof item === "number" && typeof step === "number") {
    let running = step;
    let result = [...Array(item).keys()];
    const round = (data) => {
      for (let i = 0; i < data.length; i++) {
        if (i + 1 === running) {
          data.splice(i, 1, "-");
          running += step;
        }
      }
      running -= result.length;
      result = data.filter((element) => {
        return element !== "-";
      });
    };
    while (result.length > 1) {
      round(result);
    }
    return result;
  } else {
    return "parameters must be integer";
  }
};

console.log(getGoes(9, 2));
console.log(getGoes(9, 3));
console.log(getGoes(9, "3"));
