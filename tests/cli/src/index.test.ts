import { execa } from "execa";
import { describe, expect, it } from "vitest";

describe("RowID CLI tests", (): void => {
    // rowid -v
    it("should show version with -v", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["-v"]);
        expect(stdout.startsWith("v")).toBe(true);
    });

    it("should show version with --version", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["--version"]);
        expect(stdout.startsWith("v")).toBe(true);
    });

    // rowid
    it("should generate a RowID", async (): Promise<void> => {
        const { stdout } = await execa("rowid");
        expect(typeof stdout).toBe("string");
        expect(stdout.length).toBe(10 + 22);
    });

    it("should generate a RowID with specified number using param -n", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["-n", "6"]);
        expect(typeof stdout).toBe("string");
        expect(stdout.length).toBe(10 + 6);
    });

    it("should generate a RowID with specified number using param --number", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["-n", "12"]);
        expect(typeof stdout).toBe("string");
        expect(stdout.length).toBe(10 + 12);
    });

    // rowid encode
    it("should encode to a RowID", async (): Promise<void> => {
        const { stdout } = await execa("rowid", [
            "encode",
            "2099-01-01T00:00:00.000Z",
        ]);
        expect(typeof stdout).toBe("string");
        expect(stdout.length).toBe(10);
    });

    // rowid decode
    it("should decode from a RowID", async (): Promise<void> => {
        const { stdout: rowid } = await execa("rowid", [
            "encode",
            "2099-01-01T00:00:00.000Z",
        ]);
        const { stdout } = await execa("rowid", ["decode", rowid]);
        expect(typeof stdout).toBe("string");
        expect(new Date(stdout).toISOString()).toBe("2099-01-01T00:00:00.000Z");
    });

    // rowide generate
    it("should generate a RowID with specified Date", async (): Promise<void> => {
        const { stdout } = await execa("rowid", [
            "generate",
            "2099-01-01T00:00:00.000Z",
        ]);
        const json: { success: boolean; result: string } = JSON.parse(stdout);
        expect(json.success).toBe(true);
        expect(json.result.length).toBe(10 + 22);
    });

    it("should generate a RowID with specified Date and number", async (): Promise<void> => {
        const { stdout } = await execa("rowid", [
            "generate",
            "2099-01-01T00:00:00.000Z",
            "6",
        ]);
        const json: { success: boolean; result: string } = JSON.parse(stdout);
        expect(json.success).toBe(true);
        expect(json.result.length).toBe(10 + 6);
    });

    // rowid verify
    it("should verify a RowID", async (): Promise<void> => {
        const { stdout: rowid } = await execa("rowid", [
            "encode",
            "9999-01-01T00:00:00.000Z",
        ]);
        const { stdout } = await execa("rowid", ["verify", rowid]);
        const json: { success: boolean; result: string; natural: boolean } =
            JSON.parse(stdout);
        expect(json.success).toBe(true);
        expect(new Date(json.result).toISOString()).toBe(
            "9999-01-01T00:00:00.000Z",
        );
        expect(json.natural).toBe(false);
    });

    // rowid random
    it("should generate 1 random digit", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["random", "1"]);
        expect(stdout.length).toBe(1);
    });

    it("should generate 10 random digits", async (): Promise<void> => {
        const { stdout } = await execa("rowid", ["random", "10"]);
        expect(stdout.length).toBe(10);
    });
});
