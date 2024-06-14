import { unsafedEncode } from "#/functions/encode";
import { unsafedGetRandomness } from "#/functions/getRandomness";

type RowIDProps = {
    charList: string;
    randomnessLength: number;
};

const RowID = (props: RowIDProps): string => {
    // type check
    if (typeof props.randomnessLength !== "number") {
        throw new TypeError("Input is not a number");
    }

    // range check
    if (props.randomnessLength < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }

    // result
    return (
        unsafedEncode({
            charList: props.charList,
            timestamp: new Date().getTime(),
        }) +
        unsafedGetRandomness({
            charList: props.charList,
            randomnessLength: props.randomnessLength,
        })
    );
};

export { RowID };
