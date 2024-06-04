import { charList, charListLength, timeDigits } from "#/configs/common";

const encodeFn = (timestamp: number): string => {
    // remaining
    let remaining: number = timestamp;

    // encoded
    let encoded: string = "";

    for (let i: number = 0; i < timeDigits; i++) {
        encoded = charList[remaining % charListLength] + encoded;
        remaining = Math.floor(remaining / charListLength);
    }

    // result
    return encoded;
};

const encode = (timestamp: number): string => {
    // check type
    if (typeof timestamp !== "number") {
        throw new TypeError("Timestamp is not a number");
    }

    // check range
    if (timestamp < 0) {
        throw new RangeError("Timestamp should be equal or greater than to 0");
    }

    // result
    return encodeFn(timestamp);
};

export { encode, encodeFn };
