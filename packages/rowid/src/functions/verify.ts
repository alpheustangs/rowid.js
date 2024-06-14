import type { VerifyResult } from "#/@types/verify";

import { decode } from "#/functions/decode";

type VerifyProps = {
    charList: string;
    encoded: string;
};

// verify
const verify = (props: VerifyProps): VerifyResult => {
    try {
        // decode
        const result: Date = decode({
            charList: props.charList,
            encoded: props.encoded,
        });

        let natural: boolean = true;

        /**
         * should be less than current time
         * to be considered as a natural ID
         */
        if (result.getTime() > Date.now()) {
            natural = false;
        }

        // result
        return {
            success: true,
            result,
            natural,
        };
    } catch (e: unknown) {
        return {
            success: false,
            error: e instanceof Error ? e : new Error(String(e)),
        };
    }
};

export { verify };
