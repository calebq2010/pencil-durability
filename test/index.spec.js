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

    it("should have a pencil durability of six when text is written", function() {
        expect(methods.pointDegradation("text", 10)).to.equal(6);
    });

    it("should have a pencil durability of 5 when Text is written", function() {
        expect(methods.pointDegradation("Text", 10)).to.equal(5);
    });

    it("should have a pencil durability of 2 when apple pie is written", function() {
        expect(methods.pointDegradation("apple pie", 10)).to.equal(2);
    });

    it("should have a pencil durability of 2 when Apple Pie is written", function() {
        expect(methods.pointDegradation("Apple Pie", 12)).to.equal(2);
    });

    it("should have a pencil durability of 2 when Apple Pie is written", function() {
        expect(methods.pointDegradation("Apple Pie", 12)).to.equal(2);
    });

    it("should return empty string with three spaces when pie is written with zero durability", function() {
        expect(methods.pointDegradation("pie", 0)).to.equal("   ");
    });

});