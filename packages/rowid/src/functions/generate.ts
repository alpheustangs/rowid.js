import type { Generate } from "#/@types/generate";

import { randomDigits } from "#/configs/common";

import { encode } from "#/functions/encode";
import { getRandomDigits } from "#/functions/getRandomDigits";

// generate
const generate = (
    timestamp: number,
    digits: number = randomDigits,
): Generate => {
    try {
        // encode
        const encoded: string = encode(timestamp);
        const extraDigits: string = getRandomDigits(digits);

        // result
        return {
            status: "success",
            result: encoded + extraDigits,
        };
    } catch (e: unknown) {
        return {
            status: "error",
            message: e instanceof Error ? e.message : String(e),
        };
    }
};

export { generate };
