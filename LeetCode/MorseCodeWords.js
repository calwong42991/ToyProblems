const uniqueMorseRepresentations = function(words) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let result = [];

  for(word of words){
    const sum = word.split('').reduce((total, letter) => total += morseCode[letters.indexOf(letter)], '')
    console.log('letter', sum);
    if(result.indexOf(sum) === -1){
      result.push(sum);
    }
  }
  return result.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));