import type { GenerateResult, VerifyResult } from "rowid";

import { generate, verify } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID advance function tests", (): void => {
    const time: Date = new Date("9999-12-30T00:00:00.000Z");
    const timeNumber: number = time.getTime();
    const generated: GenerateResult = generate(timeNumber, 22);

    if (!generated.success) {
        throw Error("it is not a success generated");
    }

    it("should be able to be generated", async (): Promise<void> => {
        expect(typeof generated.result === "string").toBe(true);
        expect(generated.result.length).toBe(32);
    });

    it("should be able to be verified", async (): Promise<void> => {
        const verified: VerifyResult = verify(generated.result);

        if (!verified.success) {
            throw Error("it is not a success verified");
        }

        expect(verified.result.toISOString()).toBe(time.toISOString());
        expect(verified.natural).toBe(false);
    });
});
