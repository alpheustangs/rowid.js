import type { GenerateResult } from "#/functions/common/generate";
import type { VerifyResult } from "#/functions/common/verify";

import { CHAR_LIST, RANDOMNESS_LENGTH } from "#/common/configs";
import { decode } from "#/functions/common/decode";
import { encode } from "#/functions/common/encode";
import { generate } from "#/functions/common/generate";
import { getRandomness } from "#/functions/common/getRandomness";
import { RowID } from "#/functions/common/rowid";
import { verify } from "#/functions/common/verify";
import { validateNumber } from "#/functions/validateNumber";

/** Options for the `RowIDWithConfig` function. */
type RowIDWithConfigOptions = {
    /**
     * The list of characters that can be used in the RowID,
     * it must be longer or equal to `28`.
     * @default "0123456789ABCDEFGHJKMNPQRSTVWXYZ"
     */
    charList?: string;
    /**
     * The default length of randomness in the RowID,
     * it's recommended to be longer or equal to `6`.
     * @default 22
     */
    randomnessLength?: number;
};

/**
 * This function allows you to customize how RowID works,
 * and returns the modified functions based on the parameters.
 *
 * ## Example
 *
 * ```typescript
 * import type { RowIDWithConfigResult } from "rowid";
 * import { RowIDWithConfig } from "rowid";
 *
 * const {
 *     RowID,
 *     encode,
 *     decode,
 *     generate,
 *     verify,
 *     getRandomness,
 * }: RowIDWithConfigResult = RowIDWithConfig({
 *     // ...
 * });
 * ```
 */
const RowIDWithConfig = (options: RowIDWithConfigOptions) => {
    if (options) {
        if (typeof options !== "object") {
            throw new TypeError("Options is not an object");
        }

        if (options.charList) {
            if (typeof options.charList !== "string") {
                throw new TypeError("CharList is not a string");
            }

            if (options.charList.length < 28) {
                throw new RangeError(
                    `CharList's length must be greater than or equal to 28`,
                );
            }
        }

        if (options.randomnessLength) {
            validateNumber({
                name: "RandomnessLength",
                number: options.randomnessLength,
            });
        }
    }

    const charList: string = options.charList ?? CHAR_LIST;
    const _randomnessLength: number =
        options.randomnessLength ?? RANDOMNESS_LENGTH;

    return {
        /**
         * This function generates a unique ID
         * that is almost impossible to duplicate.
         * Or you can specify the number of randomness,
         * a larger number will generate a longer ID,
         * with less chance of collision.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { RowID }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const id: string = RowID();
         * ```
         */
        RowID: (randomnessLength: number = _randomnessLength): string =>
            RowID({
                charList,
                randomnessLength,
            }),
        /**
         * This function encodes the timestamp into a ID without randomness.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { encode }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const encoded: string = encode(new Date().getTime());
         * ```
         */
        encode: (timestamp: number): string =>
            encode({
                charList,
                timestamp,
            }),
        /**
         * This function decodes the ID into a Date.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { decode }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const decoded: Date = decode("0123456789");
         * ```
         */
        decode: (encoded: string): Date =>
            decode({
                charList,
                encoded,
            }),
        /**
         * This function generates a ID based on the input.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult, GenerateResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { generate }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const current: number = new Date().getTime();
         * const result: GenerateResult = generate(current, 32 - 10);
         * ```
         */
        generate: (
            timestamp: number,
            randomnessLength: number = _randomnessLength,
        ): GenerateResult =>
            generate({
                charList,
                timestamp,
                randomnessLength,
            }),
        /**
         * This function verifies if the ID is valid and natural.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult, VerifyResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { verify }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const result: VerifyResult = verify("0123456789");
         * ```
         */
        verify: (encoded: string): VerifyResult =>
            verify({
                charList,
                encoded,
            }),
        /**
         * This function generates randomness with different methods based on the environment.
         *
         * ## Example
         *
         * ```typescript
         * import type { RowIDWithConfigResult } from "rowid";
         * import { RowIDWithConfig } from "rowid";
         *
         * const { getRandomness }: RowIDWithConfigResult = RowIDWithConfig({
         *     // ...
         * });
         *
         * const result: string = getRandomness(6);
         * ```
         */
        getRandomness: (randomnessLength: number): string =>
            getRandomness({
                charList,
                randomnessLength,
            }),
    };
};

/** Result of the `RowIDWithConfig` function. */
type RowIDWithConfigResult = ReturnType<typeof RowIDWithConfig>;

export type { RowIDWithConfigOptions, RowIDWithConfigResult };
export { RowIDWithConfig };
