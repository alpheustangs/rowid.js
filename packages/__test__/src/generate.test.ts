import type { Generate } from "rowid";

import { generate } from "rowid";
import { describe, expect, it } from "vitest";

describe("RowID generate function tests", (): void => {
    it("should be generated with error", async (): Promise<void> => {
        const generated: Generate = generate(-1, 22);
        expect(generated.status).toBe("error");
    });

    it("should be generated with error", async (): Promise<void> => {
        // @ts-expect-error
        const generated: Generate = generate("-1", 22);
        expect(generated.status).toBe("error");
    });

    it("should be generated with error", async (): Promise<void> => {
        const generated: Generate = generate(0, -22);
        expect(generated.status).toBe("error");
    });

    it("should be generated with error", async (): Promise<void> => {
        // @ts-expect-error
        const generated: Generate = generate(0, "-22");
        expect(generated.status).toBe("error");
    });

    it("should be able to be generated", async (): Promise<void> => {
        const generated: Generate = generate(Date.now(), 22);
        expect(generated.status).toBe("success");
    });
});
