// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
  
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    /* helper function to check for duplicate entries in an array. Alphabet param
       is changed into an array in substitution(), and the below function transforms an array into a set.
       it returns true if there are duplicate entries in the array, and false if all entries
       in the array are unique. 
    */
    function _checkForDuplicates(array) {
      return new Set(array).size !== array.length;
    }
  
    function substitution(input, alphabet, encode = true) {
      // early return if no alphabet param is entered.
      if (!alphabet) return false;
      const subAlphabet = alphabet.toLowerCase().split('');
      /* additional early return if alphabet param is not exactly 26 characters long,
         or if it contains duplicate entries (using helper function).
      */
      if (subAlphabet.length !== 26 || 
        _checkForDuplicates(subAlphabet)) return false;
      
      // encode block
      if (encode) {
        const encodedMessage = input.toLowerCase().split('')
          .map((char) => {
          /* in for loop, if each character in inputted message is found in the original alphabet,
             it gets transformed into the character in the corresponding location in the sub alphabet.
          */
            for (let i = 0; i < standardAlphabet.length; i++) {
              if (char === standardAlphabet[i]) {
                return subAlphabet[i];
              }
              // if the character is not a-z, it remains unchanged.
              else if (char.charCodeAt(0) > 122 || 
            char.charCodeAt(0) < 97) {
                return char;
              }
            }
          });
        return encodedMessage.join('');
      }
      // decode block
      else if (!encode) {
        const decodedMessage = input.toLowerCase().split('')
          .map((char) => {
          /* similar to encode block, if each character is found on the sub alphabet,
             it gets transformed to its corresponding character in the original alphabet.
          */
            for (let i = 0; i < subAlphabet.length; i++) {
              if (char === subAlphabet[i]) {
                return standardAlphabet[i];
              }
              // if the character is not found inW the sub alphabet, and is not a-z, it remains unchanged.
              else if (char.charCodeAt(0) > 122 || 
            char.charCodeAt(0) < 97) {
                return char;
              }
            }
          });
        return decodedMessage.join('');
      }
    }
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };