import { unsafedEncode } from "#/functions/encode";
import { unsafedGetRandomness } from "#/functions/getRandomness";

type RowIDOptions = {
    charList: string;
    randomnessLength: number;
};

const RowID = (opts: RowIDOptions): string => {
    // type check
    if (typeof opts.randomnessLength !== "number") {
        throw new TypeError("Input is not a number");
    }

    // range check
    if (opts.randomnessLength < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }

    // result
    return (
        unsafedEncode({
            charList: opts.charList,
            timestamp: new Date().getTime(),
        }) +
        unsafedGetRandomness({
            charList: opts.charList,
            randomnessLength: opts.randomnessLength,
        })
    );
};

export { RowID };
