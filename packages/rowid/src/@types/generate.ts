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

export type { GenerateResult };
