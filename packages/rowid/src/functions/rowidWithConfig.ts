import type { GenerateResult } from "#/@types/generate";
import type { VerifyResult } from "#/@types/verify";

import {
    charList as _charList,
    randomDigits as _randomDigits,
} from "#/configs/common";
import { decode } from "#/functions/decode";
import { encode } from "#/functions/encode";
import { generate } from "#/functions/generate";
import { getRandomDigits } from "#/functions/getRandomDigits";
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
     * The default number of random digits in the RowID,
     * it's recommended to be longer or equal to 6
     * @default 22
     */
    randomDigits?: number;
};

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

        if (props.randomDigits) {
            if (typeof props.randomDigits !== "number") {
                throw new TypeError("randomDigits is not a number");
            }

            if (props.randomDigits < 0) {
                throw new RangeError(
                    "randomDigits should be equal or greater than 0",
                );
            }
        }
    }

    const charList: string = props.charList ?? _charList;
    const randomDigits: number = props.randomDigits ?? _randomDigits;

    return {
        RowID: (digits: number = randomDigits): string =>
            RowID({
                charList,
                digits,
            }),
        encode: (timestamp: number): string =>
            encode({
                charList,
                timestamp,
            }),
        decode: (encoded: string): Date =>
            decode({
                charList,
                encoded,
            }),
        generate: (
            timestamp: number,
            digits: number = randomDigits,
        ): GenerateResult =>
            generate({
                charList,
                timestamp,
                digits,
            }),
        verify: (encoded: string): VerifyResult =>
            verify({
                charList,
                encoded,
            }),
        getRandomDigits: (count: number): string =>
            getRandomDigits({
                charList,
                count,
            }),
    };
};

type RowIDWithConfigResult = ReturnType<typeof RowIDWithConfig>;

export type { RowIDWithConfigProps, RowIDWithConfigResult };
export { RowIDWithConfig };
