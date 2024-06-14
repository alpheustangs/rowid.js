import type { GenerateResult } from "#/@types/generate";

import { encode } from "#/functions/encode";
import { getRandomness } from "#/functions/getRandomness";

type GenerateProps = {
    charList: string;
    timestamp: number;
    randomnessLength: number;
};

// generate
const generate = (props: GenerateProps): GenerateResult => {
    try {
        // encode
        const encoded: string = encode({
            charList: props.charList,
            timestamp: props.timestamp,
        });
        const randomness: string = getRandomness({
            charList: props.charList,
            randomnessLength: props.randomnessLength,
        });

        // result
        return {
            success: true,
            result: encoded + randomness,
        };
    } catch (e: unknown) {
        return {
            success: false,
            error: e instanceof Error ? e : new Error(String(e)),
        };
    }
};

export { generate };
