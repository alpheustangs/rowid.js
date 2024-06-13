import { unsafedEncode } from "#/functions/encode";
import { unsafedGetRandomDigits } from "#/functions/getRandomDigits";

type RowIDProps = {
    charList: string;
    digits: number;
};

const RowID = (props: RowIDProps): string => {
    // type check
    if (typeof props.digits !== "number") {
        throw new TypeError("Input is not a number");
    }

    // range check
    if (props.digits < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }

    // result
    return (
        unsafedEncode({
            charList: props.charList,
            timestamp: new Date().getTime(),
        }) +
        unsafedGetRandomDigits({
            charList: props.charList,
            count: props.digits,
        })
    );
};

export { RowID };
