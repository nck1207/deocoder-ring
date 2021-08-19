const substitutionModule = require('../src/substitution');
const substitution = require('../src/substitution');
const expect = require('chai').expect;


describe("substitution", () => {
    it("Should return false if the given alphabet isn't 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule.substitution("hello world", "hioksvocanme");
        expect(actual).to.equal(expected);
    })
    it("Should correctly translate the phrase, based on the given alphabet", () => {
        const expected = "ykrrpik";
        const actual = substitutionModule.substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
    it("Should return false if there are any duplicate characters in the given alphabet", () => {
        const expected = false;
        const actual = substitutionModule.substitution("hello world", "plmoknijbuhvygctfxrdzeswaa");
        expect(actual).to.equal(expected);
    })
    it("Should maintain spaces in the message, before and after encoding or decoding", () => {
        const expected = "hello world";
        const actual = substitutionModule.substitution("jkvvc scxvo", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
        const expected = "jkvvc scxvo";
        const actual = substitutionModule.substitution("HELLO WORLD", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
});