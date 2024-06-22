import { TIMESTAMP_LENGTH } from "#/common/configs";
import { validateNumber } from "#/functions/validateNumber";

type EncodeOptions = {
    charList: string;
    timestamp: number;
};

type UnsafedEncodeOptions = EncodeOptions;

type EncodeProcessOptions = EncodeOptions;

const encodeProcess = (opts: EncodeProcessOptions): string => {
    // declarations
    const charList: string = opts.charList;
    const charListLength: number = charList.length;

    let encoded: string = "";
    let remaining: number = opts.timestamp;

    // encode
    for (let i: number = 0; i < TIMESTAMP_LENGTH; i++) {
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
    validateNumber({
        name: "Timestamp",
        number: opts.timestamp,
    });

    return encodeProcess({
        timestamp: opts.timestamp,
        charList: opts.charList,
    });
};

export { encode, unsafedEncode };
