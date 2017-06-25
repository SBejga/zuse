let handyCodeTable = function(c: string, umlaute = false) : number {
    c = c.toLocaleLowerCase();
    
    if(c == "a" || c == "b" || c == "c") {
        return 2;
    }

    if(c == "d" || c == "e" || c == "f") {
        return 3;
    }

    if(c == "g" || c == "h" || c == "i") {
        return 4;
    }

    if(c == "j" || c == "k" || c == "l") {
        return 5;
    }

    if(c == "m" || c == "n" || c == "o") {
        return 6;
    }
    if(c == "p" || c == "q" || c == "r" || c == "s") {
        return 7;
    }

    if(c == "t" || c == "u" || c == "v") {
        return 8;
    }

    if(c == "w" || c == "x" || c == "y" || c == "z") {
        return 9;
    }

    if (umlaute) {
        if (c == "ä") {
            return 2;
        }
        if (c == "ö") {
            return 6;
        }
        if (c == "ß") {
            return 7;
        }
        if (c == "ü") {
            return 8;
        }
    }

    return 0;
}

function handyCodeReplace(str, umlaute) {
    let output = str;

    for(let c of str) {
        let regex = RegExp(c, "g");
        output = output.replace(regex, handyCodeTable(c, umlaute));
    }

    return output;
}

function handyCodeSum(str, umlaute) {
    let result = 0;

    let handyCodeStr = handyCodeReplace(str, umlaute);
    for(let c of handyCodeStr) {
        let int = parseInt(c);
        result += int;
    }

    return result;
}

class UnexpectedInput extends Error {
    constructor(message?: string) {
        super(message);
        // Set the prototype explicitly.
        //Object.setPrototypeOf(this, UnexpectedInput.prototype);
        this.name = "UnexpectedInput";
    }
}

const AlphaChar = RegExp("[a-z äöüß]+", "i");

export default function handyCode(input: string, sum = false, umlaute = false) {
    if (input.match(AlphaChar)) {
        var result;
        if (sum) {
            result = handyCodeSum(input, umlaute);
        } else {
            result = handyCodeReplace(input, umlaute);
        }
        return result;
    } else {
        throw new UnexpectedInput();
    }
}