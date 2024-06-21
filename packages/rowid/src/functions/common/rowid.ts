import { unsafedEncode } from "#/functions/common/encode";
import { unsafedGetRandomness } from "#/functions/common/getRandomness";
import { validateNumber } from "#/functions/validateNumber";

type RowIDOptions = {
    charList: string;
    randomnessLength: number;
};

const RowID = (opts: RowIDOptions): string => {
    validateNumber({
        name: "RandomnessLength",
        number: opts.randomnessLength,
    });

    // result
    return (
        unsafedEncode({
            charList: opts.charList,
            timestamp: new Date().getTime(),
        }) +
        unsafedGetRandomness({
            charList: opts.charList,
            randomnessLength: opts.randomnessLength,
        })
    );
};

export { RowID };
