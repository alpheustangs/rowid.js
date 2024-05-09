import type { Verify } from "rowid";

import { RowID, verify } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID verify function tests", (): void => {
    it("should be verified with error", async (): Promise<void> => {
        // @ts-expect-error
        const result: Verify = verify(123);
        expect(result.status).toBe("error"); // not a string
    });

    it("should be verified with error", async (): Promise<void> => {
        const result: Verify = verify("123");
        expect(result.status).toBe("error"); // not long enough
    });

    it("should be verified with error", async (): Promise<void> => {
        const result: Verify = verify("!#$@^!#&*%!#$%");
        expect(result.status).toBe("error"); // regex error
    });

    it("should be able to be verified", async (): Promise<void> => {
        const id: string = RowID();
        const result: Verify = verify(id);
        expect(result.status).toBe("success");
    });
});
