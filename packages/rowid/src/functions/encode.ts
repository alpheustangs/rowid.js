import { timestampLength } from "#/configs/common";

type EncodeOptions = {
    charList: string;
    timestamp: number;
};

type UnsafedEncodeOptions = EncodeOptions;

type EncodeValidateOptions = {
    timestamp: number;
};

type EncodeProcessOptions = EncodeOptions;

const encodeValidate = (opts: EncodeValidateOptions): void => {
    // check type
    if (typeof opts.timestamp !== "number") {
        throw new TypeError("Timestamp is not a number");
    }

    // check range
    if (opts.timestamp < 0) {
        throw new RangeError("Timestamp should be equal or greater than to 0");
    }
};

const encodeProcess = (opts: EncodeProcessOptions): string => {
    // declarations
    const charList: string = opts.charList;
    const charListLength: number = charList.length;

    let encoded: string = "";
    let remaining: number = opts.timestamp;

    // encode
    for (let i: number = 0; i < timestampLength; i++) {
        encoded = charList[remaining % charListLength] + encoded;
        remaining = Math.floor(remaining / charListLength);
    }

    // result
    return encoded;
};

const unsafedEncode = (opts: UnsafedEncodeOptions): string => {
    return encodeProcess({
        timestamp: opts.timestamp,
        charList: opts.charList,
    });
};

const encode = (opts: EncodeOptions): string => {
    encodeValidate({ timestamp: opts.timestamp });
    return encodeProcess({
        timestamp: opts.timestamp,
        charList: opts.charList,
    });
};

export { encode, unsafedEncode };
