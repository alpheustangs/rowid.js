import { decode } from "#/functions/common/decode";

type VerifyOptions = {
    charList: string;
    encoded: string;
};

/** Result of the `verify` function. */
type VerifyResult =
    | {
          /** Successful verification. */
          success: true;
          /** Generated date of the ID verified by the `verify` function. */
          result: Date;
          /** Whether the ID was generated naturally. */
          natural: boolean;
      }
    | {
          /** Failed verification. */
          success: false;
          /** Error from the `verify` function. */
          error: Error;
      };

// verify
const verify = (opts: VerifyOptions): VerifyResult => {
    try {
        // decode
        const result: Date = decode({
            charList: opts.charList,
            encoded: opts.encoded,
        });

        let natural: boolean = true;

        // should be less than current time
        // to be considered as a natural ID
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

export type { VerifyResult };
export { verify };
