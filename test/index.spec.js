var expect = require("chai").expect;
var methods = require("../src/index");

describe("canary test", function() {
    it("should pass if everything is ok", function() {
        expect(true).to.equal(true);
    });
});

describe("pencil duribility kata - write", function() {

    it("write should return a text on paper", function() {
        expect(methods.write('she sells sea shells')).to.equal('she sells sea shells');
    });

    it("Write should return more text on paper", function() {
        expect(methods.write(' by the shore')).to.equal("she sells sea shells by the shore");
    });

});

describe("pencil durability kata - point degradation", function() {

    it("should have a pencil with a point durability of four write the string text", function() {
        expect(methods.pencil(4)).to.equal("text");
    });
});