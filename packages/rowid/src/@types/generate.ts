type Generate =
    | {
          status: "success";
          result: string;
      }
    | {
          status: "error";
          message: string;
      };

export type { Generate };
