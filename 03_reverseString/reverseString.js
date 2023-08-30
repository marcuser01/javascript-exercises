const reverseString = function(string) {
  let splitChars = string.split('');
  let reversedString = '';
  for (let i = splitChars.length - 1; i >= 0; i--) {
    reversedString += splitChars[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
