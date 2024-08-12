import { encode } from "#/functions/common/encode";
import { getRandomness } from "#/functions/common/getRandomness";

type GenerateOptions = {
    charList: string;
    timestamp: number;
    randomnessLength: number;
};

/** Result of the `generate` function. */
type GenerateResult =
    | {
          /** Successful generation. */
          success: true;
          /** Generated ID from the `generate` function. */
          result: string;
      }
    | {
          /** Failed generation. */
          success: false;
          /** Error from the `generate` function. */
          error: Error;
      };

// generate
const generate = (opts: GenerateOptions): GenerateResult => {
    try {
        // encode
        const encoded: string = encode({
            charList: opts.charList,
            timestamp: opts.timestamp,
        });
        const randomness: string = getRandomness({
            charList: opts.charList,
            randomnessLength: opts.randomnessLength,
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

export type { GenerateResult };
export { generate };
