import type { GenerateResult } from "#/@types/generate";
import type { VerifyResult } from "#/@types/verify";

import {
    randomnessLength as __randomnessLength,
    charList as _charList,
} from "#/configs/common";
import { decode } from "#/functions/decode";
import { encode } from "#/functions/encode";
import { generate } from "#/functions/generate";
import { getRandomness } from "#/functions/getRandomness";
import { RowID } from "#/functions/rowid";
import { verify } from "#/functions/verify";

type RowIDWithConfigProps = {
    /**
     * The list of characters that can be used in the RowID,
     * it must be longer or equal to 28
     * @default "0123456789ABCDEFGHJKMNPQRSTVWXYZ"
     */
    charList?: string;
    /**
     * The default length of randomness in the RowID,
     * it's recommended to be longer or equal to 6
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
 * ```ts
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
const RowIDWithConfig = (props: RowIDWithConfigProps) => {
    if (props) {
        if (typeof props !== "object") {
            throw new TypeError("Input is not an object");
        }

        if (props.charList) {
            if (typeof props.charList !== "string") {
                throw new TypeError("charList is not a string");
            }

            if (props.charList.length < 28) {
                throw new RangeError("charList must be longer or equal to 28");
            }
        }

        if (props.randomnessLength) {
            if (typeof props.randomnessLength !== "number") {
                throw new TypeError("randomnessLength is not a number");
            }

            if (props.randomnessLength < 0) {
                throw new RangeError(
                    "randomnessLength should be equal or greater than 0",
                );
            }
        }
    }

    const charList: string = props.charList ?? _charList;
    const _randomnessLength: number =
        props.randomnessLength ?? __randomnessLength;

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
         * ```ts
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
         * ```ts
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
         * ```ts
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
         * ```ts
         * import type { RowIDWithConfigResult } from "rowid";
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
         * ```ts
         * import type { RowIDWithConfigResult } from "rowid";
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
         * This function generates randomness.
         * It use different methods to generate randomness based on the environment,
         * such as window.crypto on web, node:crypto on Node,
         * and Math.random if all else fails.
         *
         * ## Example
         *
         * ```ts
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

type RowIDWithConfigResult = ReturnType<typeof RowIDWithConfig>;

export type { RowIDWithConfigProps, RowIDWithConfigResult };
export { RowIDWithConfig };
