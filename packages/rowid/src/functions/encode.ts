import { timestampLength } from "#/configs/common";

type EncodeProps = {
    charList: string;
    timestamp: number;
};

type UnsafedEncodeProps = EncodeProps;

type EncodeValidateProps = {
    timestamp: number;
};

type EncodeProcessProps = EncodeProps;

const encodeValidate = (props: EncodeValidateProps): void => {
    // check type
    if (typeof props.timestamp !== "number") {
        throw new TypeError("Timestamp is not a number");
    }

    // check range
    if (props.timestamp < 0) {
        throw new RangeError("Timestamp should be equal or greater than to 0");
    }
};

const encodeProcess = (props: EncodeProcessProps): string => {
    // declarations
    const charList: string = props.charList;
    const charListLength: number = charList.length;

    let encoded: string = "";
    let remaining: number = props.timestamp;

    // encode
    for (let i: number = 0; i < timestampLength; i++) {
        encoded = charList[remaining % charListLength] + encoded;
        remaining = Math.floor(remaining / charListLength);
    }

    // result
    return encoded;
};

const unsafedEncode = (props: UnsafedEncodeProps): string => {
    return encodeProcess({
        timestamp: props.timestamp,
        charList: props.charList,
    });
};

const encode = (props: EncodeProps): string => {
    encodeValidate({ timestamp: props.timestamp });
    return encodeProcess({
        timestamp: props.timestamp,
        charList: props.charList,
    });
};

export { encode, unsafedEncode };
