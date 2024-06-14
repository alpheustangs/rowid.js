import type { GenerateResult } from "#/@types/generate";
import type { VerifyResult } from "#/@types/verify";

import {
    randomnessLength as _randomnessLength,
    charList,
} from "#/configs/common";
import { decode as _decode } from "#/functions/decode";
import { encode as _encode } from "#/functions/encode";
import { generate as _generate } from "#/functions/generate";
import { getRandomness as _getRandomness } from "#/functions/getRandomness";
import { RowID as _RowID } from "#/functions/rowid";
import { verify as _verify } from "#/functions/verify";

const RowID = (randomnessLength: number = _randomnessLength): string => {
    return _RowID({
        charList,
        randomnessLength,
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
    randomnessLength: number = _randomnessLength,
): GenerateResult => {
    return _generate({
        charList,
        timestamp,
        randomnessLength,
    });
};

const verify = (encoded: string): VerifyResult => {
    return _verify({
        charList,
        encoded,
    });
};

const getRandomness = (randomnessLength: number): string => {
    return _getRandomness({
        charList,
        randomnessLength,
    });
};

export { RowID, encode, decode, generate, verify, getRandomness };
