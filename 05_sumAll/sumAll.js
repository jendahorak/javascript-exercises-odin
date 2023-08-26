const sumAll = function (n1, n2) {
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) return 'ERROR';
  if (n1 < 0 || n2 < 0) return 'ERROR';

  let maxArg = Math.max(n1, n2);
  let minArg = Math.min(n1, n2);

  let finalSum = 0;

  for (let i = minArg; i <= maxArg; i++) {
    finalSum += i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
