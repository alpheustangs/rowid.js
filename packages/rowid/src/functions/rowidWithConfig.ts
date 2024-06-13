import type { Generate } from "#/@types/generate";
import type { Verify } from "#/@types/verify";

import { randomDigits } from "#/configs/common";
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
    charList: string;
};

const RowIDWithConfig = (props: RowIDWithConfigProps) => {
    if (!props || typeof props !== "object") {
        throw new TypeError("Input is not an object");
    }

    if (!props.charList || typeof props.charList !== "string") {
        throw new TypeError("charList is not a string");
    }

    if (props.charList.length < 28) {
        throw new RangeError("charList must be longer or equal to 28");
    }

    return {
        RowID: (digits: number = randomDigits): string =>
            RowID({
                charList: props.charList,
                digits,
            }),
        encode: (timestamp: number): string =>
            encode({
                charList: props.charList,
                timestamp,
            }),
        decode: (encoded: string): Date =>
            decode({
                charList: props.charList,
                encoded,
            }),
        generate: (
            timestamp: number,
            digits: number = randomDigits,
        ): Generate =>
            generate({
                charList: props.charList,
                timestamp,
                digits,
            }),
        verify: (encoded: string): Verify =>
            verify({
                charList: props.charList,
                encoded,
            }),
        getRandomDigits: (count: number): string =>
            getRandomDigits({
                charList: props.charList,
                count,
            }),
    };
};

type RowIDWithConfigPayload = ReturnType<typeof RowIDWithConfig>;

export type { RowIDWithConfigProps, RowIDWithConfigPayload };
export { RowIDWithConfig };
