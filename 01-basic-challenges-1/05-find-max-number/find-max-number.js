function findMaxNumberBuiltIn(arr) {
  // Math.max() takes a list of numbers as arguments and spits out the largest number
  // ...arr spreads the array into a list of arguments
  // example: Math.max(1, 2, 3) => 3
  return Math.max(...arr);
}

function findMaxNumber(arr) {
  // Keeping a temp max variable for comparing it to each element in the array
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // Inside the loop check if the current element is greater than the max
    // if yes then set max to the current element
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

module.exports = findMaxNumber;
