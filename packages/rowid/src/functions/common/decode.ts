import { TIMESTAMP_LENGTH } from "#/common/configs";

type DecodeOptions = {
    charList: string;
    encoded: string;
};

const decode = (opts: DecodeOptions): Date => {
    const ECD = "Encoded";

    // check type
    if (typeof opts.encoded !== "string") {
        throw new TypeError(`${ECD} is not a string`);
    }

    // check length
    if (opts.encoded.length < TIMESTAMP_LENGTH) {
        throw new TypeError(`${ECD} is not long enough to be decoded`);
    }

    // check regex
    if (!opts.encoded.match(new RegExp(`^[${opts.charList}]+$`))) {
        throw new TypeError(`${ECD} is not valid`);
    }

    // split
    const charList: string = opts.charList;
    const charListLength: number = charList.length;
    const encoded: string = opts.encoded.slice(0, TIMESTAMP_LENGTH);

    // timestamp
    let timestamp: number = 0;

    // decode
    for (let i: number = 0; i < TIMESTAMP_LENGTH; i++) {
        timestamp =
            timestamp * charListLength + charList.indexOf(encoded[i] as string);
    }

    // result
    return new Date(Math.max(timestamp, 0));
};

export { decode };
