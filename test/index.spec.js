var expect = require("chai").expect;
var methods = require("../src/index");

describe("canary test", function() {
    it("should pass if everything is ok", function() {
        expect(true).to.equal(true);
    });
});

describe("pencil duribility kata - write", function() {

    it("write should return a text on paper", function() {
        expect(methods.write('she sells sea shells', 20)).to.have.property("paper", "she sells sea shells");
    });

    it("Write should return more text on paper", function() {
        expect(methods.write(' by the shore', 20)).to.have.property("paper", "she sells sea shells by the shore");
    });

});

describe("pencil durability kata - point degradation", function() {

    it("should have a pencil durability of six when text is written", function() {
        expect(methods.write("text", 10)).to.have.property("point", 6);
    });

    it("should have a pencil durability of 5 when Text is written", function() {
        expect(methods.write("Text", 10)).to.have.property("point", 5);
    });

    it("should have a pencil durability of 2 when apple pie is written", function() {
        expect(methods.write("apple pie", 10)).to.have.property("point", 2);
    });

    it("should have a pencil durability of 2 when Apple Pie is written", function() {
        expect(methods.write("Apple Pie", 12)).to.have.property("point", 2);
    });

    it("should return empty string with three spaces when pie is written with zero durability", function() {
        expect(methods.write("pie", 0)).to.have.property("point", "   ");
    });

    it("should return string with the letter p and two spaces when pie is written with 1 durability", function() {
        expect(methods.write("pie", 1)).to.have.property("paper", "p  ");
    });

});