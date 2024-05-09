import { getRandomDigits } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID getRandomDigits function tests", (): void => {
    it("should be get with error", async (): Promise<void> => {
        let error: unknown;

        try {
            // @ts-expect-error
            getRandomDigits("1234asdg3515v");
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof TypeError).toBe(true);
    });

    it("should be get with error", async (): Promise<void> => {
        let error: unknown;

        try {
            getRandomDigits(-123);
        } catch (e: unknown) {
            error = e;
        }

        expect(error instanceof RangeError).toBe(true);
    });

    it("should be able to get random digits", async (): Promise<void> => {
        const digits: string = getRandomDigits(10);
        expect(digits.length).toBe(10);
    });
});
