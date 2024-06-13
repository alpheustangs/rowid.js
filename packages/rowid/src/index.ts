import type { Generate } from "#/@types/generate";
import type { Verify } from "#/@types/verify";
import type {
    RowIDWithConfigProps,
    RowIDWithConfigResult,
} from "#/functions/rowidWithConfig";

import { charList, randomDigits } from "#/configs/common";
import { decode as _decode } from "#/functions/decode";
import { encode as _encode } from "#/functions/encode";
import { generate as _generate } from "#/functions/generate";
import { getRandomDigits as _getRandomDigits } from "#/functions/getRandomDigits";
import { RowID as _RowID } from "#/functions/rowid";
import { RowIDWithConfig } from "#/functions/rowidWithConfig";
import { verify as _verify } from "#/functions/verify";

const RowID = (digits: number = randomDigits): string => {
    return _RowID({
        charList,
        digits,
    });
};

const encode = (timestamp: number): string => {
    return _encode({
        charList,
        timestamp,
    });
};

const decode = (encoded: string): Date => {
    return _decode({
        charList,
        encoded,
    });
};

const generate = (
    timestamp: number,
    digits: number = randomDigits,
): Generate => {
    return _generate({
        charList,
        timestamp,
        digits,
    });
};

const verify = (encoded: string): Verify => {
    return _verify({
        charList,
        encoded,
    });
};

const getRandomDigits = (count: number): string => {
    return _getRandomDigits({
        charList,
        count,
    });
};

export default RowID;
export type { Generate, Verify, RowIDWithConfigProps, RowIDWithConfigResult };
export {
    RowID,
    RowIDWithConfig,
    encode,
    decode,
    generate,
    verify,
    getRandomDigits,
};
