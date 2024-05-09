type Verify =
    | {
          status: "success";
          result: Date;
          natural: boolean;
      }
    | {
          status: "error";
          message: string;
      };

export type { Verify };
