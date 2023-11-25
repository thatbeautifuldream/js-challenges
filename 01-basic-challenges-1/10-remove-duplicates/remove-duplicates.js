function removeDuplicates(arr) {
  // Array to store unique values
  const uniqueArr = [];
  // Loop through the array to check if the value is already in the uniqueArr
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

module.exports = removeDuplicates;
