var alphabet_simple = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabet_umlaut = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "ä", "ö", "ü", "ß"];

export function alphabetPos(input: string, umlaut = false):string {
    input = input.toLowerCase();

    let bwwTable;
    if (umlaut) {
        bwwTable = alphabet_umlaut;
    } else {
        bwwTable = alphabet_simple;
    }

    let resultString = "";
    for (let c of input) {
        let index = bwwTable.indexOf(c);
        if (index >= 0) {
            //write position into result string, followed by space
            resultString += (index + 1) + " "; //zero based
        } else {
            resultString += "_ ";
        }
    }

    return resultString.trim();
}

export default function bww(input: string, umlaut = false, numeric = true):number {
    input = input.toLowerCase();

    let bwwTable;
    if (umlaut) {
        bwwTable = alphabet_umlaut;
    } else {
        bwwTable = alphabet_simple;
    }

    let result = 0;
    for (let c of input) {
        let index = bwwTable.indexOf(c);

        if (index >= 0) {
            //found in alphabet_array, use position as increment
            result += (index + 1); //zero based
        } else { 
            if (c === " ") {
                //skip space
                continue;
            }

            //if numeric value enabled
            if (numeric) {
                //ignore äöüß (suppress warnings)
                if (c === "ä" || c === "ö" || c === "ü" || c === "ß") {
                    continue;
                }
                //not found in array, try to parse as int
                let parse = parseInt(c);
                if (parse >= 0 && parse < 10) {
                    result += parse;
                } else {
                    console.log("bww warning: do not know what to with %s", c);
                }
            }
        }
    }

    return result;
}

export function length(input: string) {
    return input.length;
}