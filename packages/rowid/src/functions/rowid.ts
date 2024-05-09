import { randomDigits } from "#/configs/common";

import { encodeFn } from "#/functions/encode";
import { randomDigitsFn } from "#/functions/getRandomDigits";

const RowID = (digits: number = randomDigits): string => {
    // type check
    if (typeof digits !== "number") {
        throw new TypeError("Input is not a number");
    }

    // range check
    if (digits < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }

    // result
    return encodeFn(new Date().getTime()) + randomDigitsFn(digits);
};

export { RowID };
