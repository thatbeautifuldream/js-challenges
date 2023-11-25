function titleCase1(sentence) {
  // Convert sentence to lowercase and split into words
  const words = sentence.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    // traverse through each word and capitalize first letter
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  const titleCaseSentence = words.join(" ");
  return titleCaseSentence;
}

// Regex solution
function titleCase(sentence) {
  // \b matches word boundary
  // \w matches first character of each word
  // g is for global match
  return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
