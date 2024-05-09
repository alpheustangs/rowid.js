import { alphabet, alphabetLength, timeDigits } from "#/configs/common";

// decode
const decode = (encoded: string): Date => {
    // check type
    if (typeof encoded !== "string") {
        throw new TypeError("Input is not a string");
    }

    // check length
    if (encoded.length < timeDigits) {
        throw new TypeError("Input is not long enough to be decoded");
    }

    // check regex
    if (!encoded.match(new RegExp(`^[${alphabet}]+$`))) {
        throw new TypeError("Input is not a valid RowID");
    }

    // split and upper case
    const _encoded: string = encoded.slice(0, timeDigits).toUpperCase();

    // timestamp
    let timestamp: number = 0;

    // decode
    for (let i: number = 0; i < timeDigits; i++) {
        timestamp = timestamp * alphabetLength + alphabet.indexOf(_encoded[i]);
    }

    // result
    return new Date(Math.max(timestamp, 0));
};

export { decode };
