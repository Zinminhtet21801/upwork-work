function checkVowel(word) {
  let totalVowel = 0;
  for (character in word) {
    if (["a", "e", "i", "o", "u"].includes(word[character].toLowerCase())) {
      totalVowel++;
    }
  }
  return totalVowel;
}
let vowelWordArray = [];
const sampleInput =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

const splittedInput = sampleInput.split(" ");

for (let i = 0; i < splittedInput.length; i++) {
  vowelWordArray.push(checkVowel(splittedInput[i]));
}

const maxVowelIndex = Math.max(...vowelWordArray);
const maxVowelWord = splittedInput[vowelWordArray.indexOf(maxVowelIndex)];
const letterOnlyArray = maxVowelWord
  .split("")
  .filter((char) => /[a-zA-Z]/.test(char));
console.log(letterOnlyArray.join(""));
