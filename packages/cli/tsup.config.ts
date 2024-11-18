import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: {
            index: "./src/index.ts",
        },
        minify: true,
        outDir: "./dist",
        clean: true,
        platform: "node",
        tsconfig: "./tsconfig.json",
        removeNodeProtocol: false,
    },
]);
