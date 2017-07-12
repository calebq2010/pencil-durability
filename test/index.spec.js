var expect = require("chai").expect;
var write = require("../src/index");

describe("canary test", function() {
    it("should pass if everything is ok", function() {
        expect(true).to.equal(true);
    });
});

describe("pencil duribility kata", function() {

    it("write should return a text on paper", function() {
        expect(write('she sells sea shells')).to.equal('she sells sea shells');
    });

    it("Write should return more text on paper", function() {
        expect(write(' by the shore')).to.equal("she sells sea shells by the shore");
    });

});