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
 * This function generates a 32-character unique ID
 * that is almost impossible to duplicate.
 * Or you can specify the number of randomness,
 * a larger number will generate a longer ID,
 * with less chance of collision.
 *
 * ## Example
 *
 * ```ts
 * import RowID from "rowid";
 *
 * const id: string = RowID();
 * ```
 *
 * With specified randomness:
 *
 * ```ts
 * import RowID from "rowid";
 *
 * const id: string = RowID(6);
 * ```
 */
const RowID = (randomnessLength: number = _randomnessLength): string => {
    return _RowID({
        charList,
        randomnessLength,
    });
};

/**
 * This function encodes the timestamp into a ID without randomness.
 *
 * ## Example
 *
 * ```ts
 * import { encode } from "rowid";
 *
 * const result: string = encode(new Date().getTime());
 * ```
 */
const encode = (timestamp: number): string => {
    return _encode({
        charList,
        timestamp,
    });
};

/**
 * This function decodes the ID into a Date.
 *
 * ## Example
 *
 * ```ts
 * import { RowID, decode } from "rowid";
 *
 * const id: string = RowID();
 * const result: Date = decode(id);
 * ```
 */
const decode = (encoded: string): Date => {
    return _decode({
        charList,
        encoded,
    });
};

/**
 * This function generates a ID based on the input.
 *
 * ## Example
 *
 * ```ts
 * import type { GenerateResult } from "rowid";
 * import { generate } from "rowid";
 *
 * const current: number = new Date().getTime();
 * const result: GenerateResult = generate(current, 22);
 * ```
 */
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

/**
 * This function verifies if the ID is valid and natural.
 *
 * ## Example
 *
 * ```ts
 * import type { VerifyResult } from "rowid";
 * import { RowID, verify } from "rowid";
 *
 * const id: string = RowID();
 * const result: VerifyResult = verify(id);
 * ```
 */
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
 *
 * ## Example
 *
 * ```ts
 * import { getRandomness } from "rowid";
 *
 * const result: string = getRandomness(6);
 * ```
 */
const getRandomness = (randomnessLength: number): string => {
    return _getRandomness({
        charList,
        randomnessLength,
    });
};

export { RowID, encode, decode, generate, verify, getRandomness };
