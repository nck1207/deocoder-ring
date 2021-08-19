// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");
const caesarModule = require("../src/caesar")

describe("caesar ",() => {
//const input = "thinkful"
  it("should return a shift of 3",() => {
    const expected ='wklqnixo'
    const actual = caesarModule.caesar("thinkful", 3)
    expect(actual).to.equal(expected)
  });
  it("should return a shift of -3",() => {
    const expected ='qefkhcri'
    const actual = caesarModule.caesar("thinkful", -3)
    expect(actual).to.equal(expected)
  });
  it("should return a shift of 3 and false",() => {
    const expected ="thinkful"
    const actual = caesarModule.caesar("wklqnixo", 3, false)
    expect(actual).to.equal(expected)
  });
  it("it should encode a string",() => {
    const expected = 'bpqa qa i amkzmb umaaiom!'
    const actual = caesarModule.caesar("This is a secret message!", 8, true)
    expect(actual).to.equal(expected)
  });
  it("it should decode a string",() => {
    const expected = 'this is a secret message!'
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    expect(actual).to.equal(expected)
  });
   it("shift value is not present or equal 0",() => {
    const expected = false
    const actual = caesarModule.caesar("thinkful", 0)
    expect(actual).to.equal(expected)
  });
  it("shift value is less -25" ,() => {
    const expected = false
    const actual = caesarModule.caesar("thinkful", -26)
    expect(actual).to.equal(expected)
  });
 it("shift value is greater than 25" ,() => {
    const expected = false
    const actual = caesarModule.caesar("thinkful", 26)
    expect(actual).to.equal(expected)
  });
});