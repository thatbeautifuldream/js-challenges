function isPalindrome(str) {
  // const formattedStr = str.toLowerCase().replace(" ", "");
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
