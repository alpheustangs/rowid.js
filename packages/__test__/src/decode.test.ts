import { RowID, decode } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID decode function tests", (): void => {
    const id: string = RowID();

    it("should be decoded with string TypeError", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            decode(1234);
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be decoded with length TypeError", async (): Promise<void> => {
        let error: unknown;

        try {
            decode("1234");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be decoded with regex TypeError", async (): Promise<void> => {
        let error: unknown;

        try {
            decode("!#^$!#$^)!#$^!#$^%!#");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be able to be decoded", async (): Promise<void> => {
        const decoded: Date = decode(id);
        expect(true).toBe(decoded instanceof Date);
    });
});
