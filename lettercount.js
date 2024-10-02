//define the function = letterOccurrence with word as parameter
function letterOccurence(word) {
  //input validation = if word is not a string return error and exit function
  if (typeof word !== "string") {
    console.error("Error: Input must be a string");
    return;
  }
  /*letterCounts stores the count of each unique letter
  for loop iterates over each chr(letter) in the word string
  it then converts the letter to lowercase and updates the object then 
  checks if letterCounts already exists if not it defaults to 0 
  then it increments the count of the current letter by 1
  */
  const letterCounts = {};
  for (const letter of word) {
    const lowwerLetter = letter.toLowerCase();
    letterCounts[lowwerLetter] = (letterCounts[lowwerLetter] || 0) + 1;
  }
  /*this loop iterates over the keys(letter) of the object then add
  it to a new string which consists on the current letter followed 
  by the count then returns result */
  const result = [];
  for (const letter in letterCounts) {
    result.push(`${letter}${letterCounts[letter]}`);
  }
  return result.join("");
}
//inputs which return h1e1l3o2 1w1r1d1
const inputWord = "Hello World";
const output = letterOccurence(inputWord);
console.log(output);
