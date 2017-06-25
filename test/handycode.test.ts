import * as chai from "chai";
import handyCode from '../src/text/handycode';

describe('Handycode', () => {
    it("should replace alphabet by handy numbers", () => {
        let testElements = [
            ["abc", "222"],
            ["def", "333"],
            ["ghi", "444"],
            ["jkl", "555"],
            ["mno", "666"],
            ["pqrs", "7777"],
            ["tuv", "888"],
            ["wxyz", "9999"]
        ];
        for (let testPair of testElements) {
            chai.expect(handyCode(testPair[0])).to.equal(testPair[1]);
            chai.expect(handyCode(testPair[0].toUpperCase())).to.equal(testPair[1]);
        }
    });

    it("should replace aöüß by 0 (normal)", () => {
        chai.expect(handyCode("äöüß")).to.equal("0000");
    });

    it("should replace äöüß too (umlaute=true)", () => {
        chai.expect(handyCode("äöüß", false, true)).to.equal("2687");
    });

    it("should sum", () => {
        chai.expect(handyCode("Deutschland", true)).to.equal(51);
        chai.expect(handyCode("bußgeldbücher", false, true)).to.equal("2874353282437");
        chai.expect(handyCode("bußgeldbücher", true, true)).to.equal(58);
    });

});