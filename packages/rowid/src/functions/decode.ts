import { timestampLength } from "#/configs/common";

type DecodeOptions = {
    charList: string;
    encoded: string;
};

type DecodeValidateOptions = DecodeOptions;

type DecodeProcessOptions = DecodeOptions;

const decodeValidate = (opts: DecodeValidateOptions): void => {
    // check type
    if (typeof opts.encoded !== "string") {
        throw new TypeError("Input is not a string");
    }

    // check length
    if (opts.encoded.length < timestampLength) {
        throw new TypeError("Input is not long enough to be decoded");
    }

    // check regex
    if (!opts.encoded.match(new RegExp(`^[${opts.charList}]+$`))) {
        throw new TypeError("Input is not a valid RowID");
    }
};

const decodeProcess = (opts: DecodeProcessOptions): Date => {
    // split and upper case
    const charList: string = opts.charList;
    const charListLength: number = charList.length;
    const encoded: string = opts.encoded
        .slice(0, timestampLength)
        .toUpperCase();

    // timestamp
    let timestamp: number = 0;

    // decode
    for (let i: number = 0; i < timestampLength; i++) {
        timestamp = timestamp * charListLength + charList.indexOf(encoded[i]);
    }

    // result
    return new Date(Math.max(timestamp, 0));
};

const decode = (opts: DecodeOptions): Date => {
    decodeValidate({ encoded: opts.encoded, charList: opts.charList });
    return decodeProcess({ encoded: opts.encoded, charList: opts.charList });
};

export { decode };
