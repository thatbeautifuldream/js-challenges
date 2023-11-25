function reverseStringLoop(str) {
  // Store the initial reverse string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // Loop through the string backwards and keep storing the characters
    reversed += str[i];
  }
  return reversed;
}

function reverseString(string) {
  // Split the string into an array of characters
  // Reverse the array
  // Join the array back into a string
  return string.split("").reverse().join("");
}

module.exports = reverseString;
