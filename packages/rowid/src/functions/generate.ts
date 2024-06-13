import type { Generate } from "#/@types/generate";

import { encode } from "#/functions/encode";
import { getRandomDigits } from "#/functions/getRandomDigits";

type GenerateProps = {
    charList: string;
    timestamp: number;
    digits: number;
};

// generate
const generate = (props: GenerateProps): Generate => {
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
