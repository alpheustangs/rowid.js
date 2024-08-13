import { defineConfig } from "tsup";

export default defineConfig([
    {
        minify: true,
        platform: "node",
        tsconfig: "./tsconfig.json",
        entry: {
            index: "./src/index.ts",
        },
        outDir: "./dist",
    },
]);
