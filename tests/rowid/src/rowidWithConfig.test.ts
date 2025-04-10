import type { RowIDWithConfigResult } from "rowid";

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

    const rwc: RowIDWithConfigResult = RowIDWithConfig({
        charList: "0123456789ACDEFGHJKMNPQRTVWXY",
    });

    it("should be a string", async (): Promise<void> => {
        const id: string = rwc.RowID();
        expect(typeof id).toBe("string");
        expect(id.length).toBe(32);
    });

    it("should be a string with specified length", async (): Promise<void> => {
        const id: string = rwc.RowID(16 - 10);
        expect(typeof id).toBe("string");
        expect(id.length).toBe(16);
    });

    it("should encode and decode", async (): Promise<void> => {
        const now: number = new Date().getTime();

        const id: string = rwc.encode(now);

        expect(typeof id).toBe("string");
        expect(id.length).toBe(10);

        const decoded: number = rwc.decode(id).getTime();

        expect(decoded).toBe(now);
    });

    it("should encode and decode", async (): Promise<void> => {
        const { encode, decode }: RowIDWithConfigResult = RowIDWithConfig({
            charList: "0123456789acdefghjkmnpqrtvwxy",
        });

        const now: number = new Date().getTime();

        const id: string = encode(now);

        expect(typeof id).toBe("string");
        expect(id.length).toBe(10);

        const decoded: number = decode(id).getTime();

        expect(decoded).toBe(now);
    });
});
