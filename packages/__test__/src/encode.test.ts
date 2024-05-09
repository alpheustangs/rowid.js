import { encode } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID encode function tests", (): void => {
    it("should be encoded with nan TypeError", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            encode("1234asdg3515v");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be decoded with range TypeError", async (): Promise<void> => {
        let error: unknown;

        try {
            encode(-100);
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof RangeError).toBe(true);
    });

    it("should be able to be encoded", async (): Promise<void> => {
        const encoded: string = encode(Date.now());
        expect(true).toBe(typeof encoded === "string");
    });
});
