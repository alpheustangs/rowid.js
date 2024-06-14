import { getRandomness } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID getRandomness function tests", (): void => {
    it("should be get with error", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            getRandomness("1234asdg3515v");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be get with error", async (): Promise<void> => {
        let error: unknown;

        try {
            getRandomness(-123);
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof RangeError).toBe(true);
    });

    it("should be able to get randomness", async (): Promise<void> => {
        const randomness: string = getRandomness(10);
        expect(randomness.length).toBe(10);
    });
});
