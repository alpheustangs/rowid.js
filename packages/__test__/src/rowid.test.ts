import { RowID } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID basic tests", (): void => {
    it("should not be able to be generated", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            const id: string = RowID("1234");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be a string", async (): Promise<void> => {
        const id: string = RowID();
        expect(true).toBe(typeof id === "string");
    });
});
