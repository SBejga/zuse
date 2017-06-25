import * as chai from "chai";
import { qs, eqs } from '../src/text/qs';

describe('Handycode', () => {
    
    it("should calculate digit sum (qs)", () => {
        chai.expect(qs(1989)).to.equal(27);
    });

    it("should calculate iterated digit sum (eqs)", () => {
        chai.expect(eqs(1989)).to.equal(9);
    });

    it("should work with 20 digit number", () => {
        chai.expect(() => eqs(99999999999999999999)).not.to.throw('Not numeric input');
    });
});