const chekPrime = (item) => {
  if (typeof item === "number") {
    const left = () => {
      let cekleft = [...`${item}`].map(Number);
      for (let i = 0; i <= cekleft.length; i++) {
        cekleft.shift();
        let data = Number(cekleft.join(""));
        let nums = 0;

        for (let i = 1; i <= data; i++) {
          data % i === 0 ? nums++ : " ";
        }
        nums === 2 ? (cekleft = true) : (cekleft = false);
      }
      return cekleft;
    };

    const right = () => {
      let cekRight = [...`${item}`].map(Number);

      for (let i = 0; i <= cekRight.length; i++) {
        cekRight.pop();

        let data = Number(cekRight.join(""));
        let num = 0;
        for (let i = 1; i <= data; i++) {
          data % i === 0 ? num++ : " ";
        }
        num === 2 ? (cekRight = true) : (cekRight = false);
      }
      return cekRight;
    };

    if (left() === right()) {
      return "both";
    } else if (left()) {
      return "left";
    } else if (right()) {
      return "right";
    } else {
      return false;
    }
  } else {
    return "parameters must be number";
  }
};

console.log(chekPrime(8167));
console.log(chekPrime(4792));
console.log(chekPrime(471163));
console.log(chekPrime('hallo'));
