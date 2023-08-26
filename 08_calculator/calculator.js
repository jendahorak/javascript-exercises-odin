const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function (nums) {
  mult = 1;
  nums.forEach((num) => {
    mult = mult * num;
  });
  return mult;
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
