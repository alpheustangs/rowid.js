import type { GenerateResult } from "#/functions/common/generate";
import type { VerifyResult } from "#/functions/common/verify";

import { RANDOMNESS_LENGTH, CHAR_LIST as charList } from "#/common/configs";
import { decode as _decode } from "#/functions/common/decode";
import { encode as _encode } from "#/functions/common/encode";
import { generate as _generate } from "#/functions/common/generate";
import { getRandomness as _getRandomness } from "#/functions/common/getRandomness";
import { RowID as _RowID } from "#/functions/common/rowid";
import { verify as _verify } from "#/functions/common/verify";

/**
 * This function generates a 32-character unique ID
 * that is almost impossible to duplicate.
 * Or you can specify the number of randomness,
 * a larger number will generate a longer ID,
 * with less chance of collision.
 *
 * ## Example
 *
 * ```typescript
 * import RowID from "rowid";
 *
 * const id: string = RowID();
 * ```
 *
 * With specified randomness:
 *
 * ```typescript
 * import RowID from "rowid";
 *
 * const id: string = RowID(6);
 * ```
 */
const RowID = (randomnessLength: number = RANDOMNESS_LENGTH): string => {
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
 * ```typescript
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
 * ```typescript
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
 * ```typescript
 * import type { GenerateResult } from "rowid";
 * import { generate } from "rowid";
 *
 * const current: number = new Date().getTime();
 * const result: GenerateResult = generate(current, 22);
 * ```
 */
const generate = (
    timestamp: number,
    randomnessLength: number = RANDOMNESS_LENGTH,
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
 * ```typescript
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
 * This function generates randomness with different methods based on the environment.
 *
 * ## Example
 *
 * ```typescript
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
