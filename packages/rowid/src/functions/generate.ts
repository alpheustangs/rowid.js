import type { GenerateResult } from "#/@types/generate";

import { encode } from "#/functions/encode";
import { getRandomDigits } from "#/functions/getRandomDigits";

type GenerateProps = {
    charList: string;
    timestamp: number;
    digits: number;
};

// generate
const generate = (props: GenerateProps): GenerateResult => {
    try {
        // encode
        const encoded: string = encode({
            charList: props.charList,
            timestamp: props.timestamp,
        });
        const extraDigits: string = getRandomDigits({
            charList: props.charList,
            count: props.digits,
        });

        // result
        return {
            success: true,
            result: encoded + extraDigits,
        };
    } catch (e: unknown) {
        return {
            success: false,
            error: e instanceof Error ? e : new Error(String(e)),
        };
    }
};

export { generate };
