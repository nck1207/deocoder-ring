// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope
  
     function caesar(input, shift, encode = true) {
      //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false. 
      if (shift > 25 || shift < -25 || shift == 0) return false;
       if (encode === false) shift = -shift;//if it is being decoded you'd reverse the shift
      
      let newInput = input.toLowerCase();//Capital letters can be ignored.
      let output = "";//is a string
      for (let i = 0; i < newInput.length; i++) {//loop through
        let theCode = newInput.charCodeAt(i);
        if (theCode >= 97 && theCode <= 122) {
          theCode += shift;
          //Spaces should be maintained throughout, as should other non-alphabetic symbols.
          theCode < 97 ? theCode += 26 : null;//wrapping
          theCode > 122 ? theCode -= 26 : null;  
        }
        output += String.fromCharCode(theCode);
      }
      return output;
    }
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  