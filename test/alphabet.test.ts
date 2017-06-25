import * as chai from "chai";
import BWW from '../src/text/alphabet';
import { length, alphabetPos } from '../src/text/alphabet';

describe('BWW', () => {
    it("should calculate BWW with A-Z", () => {
        chai.expect(BWW("Sonnenblume")).to.equal(134);
    });

    it("should calculate BWW and ignore umlaute by default", () => {
        chai.expect(BWW("Bäckermeister")).to.equal(128);
        chai.expect(BWW("Bäckermeister", false)).to.equal(128);
    });

    it("should calculate BWW with Umlaute as 25+", () => {
        chai.expect(BWW("Bäckermeister", true)).to.equal(155);
    });

    it("should calculate BWW with ß with 30", () => {
        chai.expect(BWW("ß", true)).to.equal(30);
        chai.expect(BWW("große weiße Weißwürste", true)).to.equal(328);
    });
});

describe("Alphabet Position", () => {
    it("should replace chars by their alphabet position as string", () => {
        chai.expect(alphabetPos("München ist die bayrische Landeshauptstadt"))
            .to.equal("13 _ 14 3 8 5 14 _ 9 19 20 _ 4 9 5 _ 2 1 25 18 9 19 3 8 5 _ 12 1 14 4 5 19 8 1 21 16 20 19 20 1 4 20");

        chai.expect(alphabetPos("München ist die bayrische Landeshauptstadt", true))
            .to.equal("13 29 14 3 8 5 14 _ 9 19 20 _ 4 9 5 _ 2 1 25 18 9 19 3 8 5 _ 12 1 14 4 5 19 8 1 21 16 20 19 20 1 4 20");
    });
});

describe('Length', () => {   
    it("should get string length", () => {
        chai.expect(length("1989")).to.equal(4);
    });
});