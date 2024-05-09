import { alphabet, alphabetLength } from "#/configs/common";

const getRandomByte = (): number => {
    // use window.crypto when available
    if (
        typeof window !== "undefined" &&
        window.crypto &&
        window.crypto.getRandomValues
    ) {
        try {
            return window.crypto.getRandomValues(new Uint8Array(1))[0];
        } catch (e: unknown) {
            // ignore
        }
    }

    // use node:crypto when available
    if (typeof require === "function") {
        try {
            return require("node:crypto").randomBytes(1)[0];
        } catch (e: unknown) {
            // ignore
        }
    }

    // use Math.random
    return Math.floor(Math.random() * 256);
};

const randomDigitsFn = (count: number): string => {
    // declarations
    let randomDigits: string = "";

    // implementation
    for (let i: number = 0; i < count; i++) {
        randomDigits += alphabet[getRandomByte() % alphabetLength];
    }

    // result
    return randomDigits;
};

const getRandomDigits = (count: number): string => {
    // check type
    if (typeof count !== "number") {
        throw new TypeError("Input is not a number");
    }

    // check range
    if (count < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }

    // result
    return randomDigitsFn(count);
};

export { getRandomDigits, randomDigitsFn };
