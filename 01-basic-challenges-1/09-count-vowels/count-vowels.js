function countVowels(str) {
  // Format the string to lowercase
  const formattedStr = str.toLowerCase();
  // Create an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Count variable for the occurance of each vowel
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
