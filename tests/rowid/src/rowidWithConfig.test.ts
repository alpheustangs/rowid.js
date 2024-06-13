import type { RowIDWithConfigPayload } from "rowid";

import { RowIDWithConfig } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowIDWithConfig tests", (): void => {
    it("should not be able to run", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            RowIDWithConfig();
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should not be able to run", async (): Promise<void> => {
        let error: unknown;

        try {
            RowIDWithConfig({
                // @ts-expect-error
                charList: 1234,
            });
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should not be able to run", async (): Promise<void> => {
        let error: unknown;

        try {
            RowIDWithConfig({
                charList: "1234",
            });
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof RangeError).toBe(true);
    });

    const { RowID }: RowIDWithConfigPayload = RowIDWithConfig({
        charList: "0123456789ACDEFGHJKMNPQRTVWXY",
    });

    it("should be a string", async (): Promise<void> => {
        const id: string = RowID();
        expect(typeof id).toBe("string");
        expect(id.length).toBe(32);
    });

    it("should be a string with specified length", async (): Promise<void> => {
        const id: string = RowID(16 - 10);
        expect(typeof id).toBe("string");
        expect(id.length).toBe(16);
    });
});
