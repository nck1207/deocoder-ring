// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope
  
     function polybius(input, encode = true) {
      const arrayKey = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "i/j", "k"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"],
      ];
  
      let output = "";
  
      if (encode == true) {
        let lowerInput = input.toLowerCase();
        // Iterate every letter and return the Array Index
        for (let i = 0; i < lowerInput.length; i++) {
          output += arrayIterationEncodeByLetter(arrayKey, lowerInput[i]);
        }
      } else {
        // Remove every non-number and return it to a new string
        let numTest = input.replace(/\D/g, "");
        // Check if Decode is Enabled and numTest is Even
        if (encode == false && numTest.length % 2 == 0) {
          // Iterate through the Entire Message
          output += arrayIterationDecodeMessage(arrayKey, input);
        } else {
          return false;
        }
      }
  
      console.log(`input : ${input} \noutput : ${output}`);//visualize
      return output;
    }
  
    function arrayIterationEncodeByLetter(array, letter) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j].includes(letter)) {
            console.log(`Encoding ${letter} to ${j + 1}${i + 1}`);//visualize
            return `${j + 1}${i + 1}`;
          }
        }
      }
      return letter;
    }
  
    function arrayIterationDecodeMessage(array, message) {
      let output = "";
  
      for (let i = 0; i < message.length; i++) {
        // Check is value is a Blank Space
        if (message.charAt(i) == " ") {
          output += " ";
        } else {
          // Use the Value at Pos i and Pos i+1 to convert to a Letter from the 2D Array
          let row = message.charAt(i) - 1;
          let col = message.charAt(i + 1) - 1;
          let value = array[col][row];
          output += value;
          // Add another 1 to the index to skip the next Value
          i++;
          console.log(`Decoded ${col}:${row} to ${value}`);//visualize
        }
      }
      return output;
    }
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };