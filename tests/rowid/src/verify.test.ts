import type { VerifyResult } from "rowid";

import { RowID, verify } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID verify function tests", (): void => {
    it("should be verified with error", async (): Promise<void> => {
        // @ts-expect-error
        const result: VerifyResult = verify(123);
        expect(result.success).toBe(false); // not a string
    });

    it("should be verified with error", async (): Promise<void> => {
        const result: VerifyResult = verify("123");
        expect(result.success).toBe(false); // not long enough
    });

    it("should be verified with error", async (): Promise<void> => {
        const result: VerifyResult = verify("!#$@^!#&*%!#$%");
        expect(result.success).toBe(false); // regex error
    });

    it("should be able to be verified", async (): Promise<void> => {
        const id: string = RowID();
        const result: VerifyResult = verify(id);
        expect(result.success).toBe(true);
    });
});
