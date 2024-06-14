import type { GenerateResult } from "rowid";

import { generate } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID generate function tests", (): void => {
    it("should be generated with error", async (): Promise<void> => {
        const generated: GenerateResult = generate(-1, 22);
        expect(generated.success).toBe(false);
    });

    it("should be generated with error", async (): Promise<void> => {
        // @ts-expect-error
        const generated: GenerateResult = generate("-1", 22);
        expect(generated.success).toBe(false);
    });

    it("should be generated with error", async (): Promise<void> => {
        const generated: GenerateResult = generate(0, -22);
        expect(generated.success).toBe(false);
    });

    it("should be generated with error", async (): Promise<void> => {
        // @ts-expect-error
        const generated: GenerateResult = generate(0, "-22");
        expect(generated.success).toBe(false);
    });

    it("should be able to be generated", async (): Promise<void> => {
        const generated: GenerateResult = generate(Date.now(), 22);
        expect(generated.success).toBe(true);
    });
});
