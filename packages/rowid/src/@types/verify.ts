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

export type { VerifyResult };
