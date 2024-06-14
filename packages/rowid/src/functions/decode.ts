import { timestampLength } from "#/configs/common";

type DecodeProps = {
    charList: string;
    encoded: string;
};

type DecodeValidateProps = DecodeProps;

type DecodeProcessProps = DecodeProps;

const decodeValidate = (props: DecodeValidateProps): void => {
    // check type
    if (typeof props.encoded !== "string") {
        throw new TypeError("Input is not a string");
    }

    // check length
    if (props.encoded.length < timestampLength) {
        throw new TypeError("Input is not long enough to be decoded");
    }

    // check regex
    if (!props.encoded.match(new RegExp(`^[${props.charList}]+$`))) {
        throw new TypeError("Input is not a valid RowID");
    }
};

const decodeProcess = (props: DecodeProcessProps): Date => {
    // split and upper case
    const charList: string = props.charList;
    const charListLength: number = charList.length;
    const encoded: string = props.encoded
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

const decode = (props: DecodeProps): Date => {
    decodeValidate({ encoded: props.encoded, charList: props.charList });
    return decodeProcess({ encoded: props.encoded, charList: props.charList });
};

export { decode };
