type VerifyResult =
    | {
          success: true;
          result: Date;
          natural: boolean;
      }
    | {
          success: false;
          error: Error;
      };

export type { VerifyResult };
