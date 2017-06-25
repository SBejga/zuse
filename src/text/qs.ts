const numeric = RegExp("[0-9]+");

export function qs(a):number {
    //toString
    let input:string = a.toString();

    //check numeric only
    if (!input.match(numeric)) {
        throw new Error("Not numeric input");
    }

    let result = 0;
    for (let c of input) {
        let i = parseInt(c);
        result += i;
    }

    return result;
}

export function eqs(input):number {
    let cycle = 0;
    let maxCycle = 15;
    let result = input;
    do {
        cycle++;
        result = qs(result).toString();
    } while (result.length !== 1 || cycle >= maxCycle);

    if (cycle >= maxCycle) {
        throw new Error("too much cycles needed. (>"+maxCycle+")");
    } else {
        return parseInt(result);
    }
}