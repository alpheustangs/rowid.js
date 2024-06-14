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

/**
 * This function generates a 32 chars unique ID
 * that is almost impossible to collide.
 * Or you can specify the number of randomness,
 * a larger number will generate a longer ID,
 * with less chance of collision.
 */
const RowID = (randomnessLength: number = _randomnessLength): string => {
    return _RowID({
        charList,
        randomnessLength,
    });
};

/** This function encode the timestamp into a ID without randomness. */
const encode = (timestamp: number): string => {
    return _encode({
        charList,
        timestamp,
    });
};

/** This function decode the ID into a Date. */
const decode = (encoded: string): Date => {
    return _decode({
        charList,
        encoded,
    });
};

/** This function generates a ID based on the input. */
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

/** This function verifys if the ID is valid and natural. */
const verify = (encoded: string): VerifyResult => {
    return _verify({
        charList,
        encoded,
    });
};

/**
 * This function generates randomness.
 * It use different methods to generate randomness based on the environment,
 * such as window.crypto on web, node:crypto on Node,
 * and Math.random if all else fails.
 */
const getRandomness = (randomnessLength: number): string => {
    return _getRandomness({
        charList,
        randomnessLength,
    });
};

export { RowID, encode, decode, generate, verify, getRandomness };
