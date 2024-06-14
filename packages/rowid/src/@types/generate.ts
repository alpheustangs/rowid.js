type GenerateResult =
    | {
          success: true;
          result: string;
      }
    | {
          success: false;
          error: Error;
      };

export type { GenerateResult };
