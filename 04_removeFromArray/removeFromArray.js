const removeFromArray = function (arr, ...args) {
  const mutatedArr = arr;

  // loop over ...args array, check if arg exists in arr, yes - filter, no continue, return new arr
  args.forEach((e) => {
    if (mutatedArr.includes(e)) {
      indexToRemove = mutatedArr.indexOf(e);
      mutatedArr.splice(indexToRemove, 1);
    }
  });

  return mutatedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
