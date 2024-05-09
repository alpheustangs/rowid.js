import type { Verify } from "#/@types/verify";

import { decode } from "#/functions/decode";

// verify
const verify = (id: string): Verify => {
    try {
        // decode
        const result: Date = decode(id);

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
