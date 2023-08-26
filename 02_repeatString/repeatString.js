const repeatString = function (givenString, numberOfRepeats) {
  let repeatedString = ''; // Initialize an empty string to store the repeated result
  if (numberOfRepeats < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < numberOfRepeats; i++) {
    repeatedString += givenString; // Concatenate the givenString to the repeatedString
  }

  return repeatedString; // Return the final repeatedString after the loop is done
};
// Do not edit below this line
module.exports = repeatString;
