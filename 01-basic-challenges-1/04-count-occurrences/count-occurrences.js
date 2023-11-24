function countOccurrencesInLoop(string, occurance) {
  // Count occurances of a value in an string
  // string: string to search
  // occurance: value to search for
  // return: number of occurances
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === occurance) {
      count++;
    }
  }
  return count;
}

const countOccurrences = (string, occurance) => {
  // string.split(occurance) will split the string into an array of strings
  // where each occurance of the occurance is replaced with an empty string
  // so the length of the array will be the number of occurances
  // minus 1 because the last occurance will not be replaced
  // example : "milind".split("i") => ["m", "l", "nd"]
  // so the length of the array is 3 but "i" occurs twice in "milind"
  // so the number of occurances is 3 - 1 = 2
  // console.log(string.split(occurance));
  return string.split(occurance).length - 1;
};

// countOccurrences("milind", "i");

module.exports = countOccurrences;
