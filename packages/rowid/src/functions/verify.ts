import type { Verify } from "#/@types/verify";

import { decode } from "#/functions/decode";

type VerifyProps = {
    charList: string;
    encoded: string;
};

// verify
const verify = (props: VerifyProps): Verify => {
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
            status: "success",
            result,
            natural,
        };
    } catch (e: unknown) {
        return {
            status: "error",
            message: e instanceof Error ? e.message : String(e),
        };
    }
};

export { verify };
