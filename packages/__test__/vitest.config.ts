import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        root: process.cwd(),
        bail: 1,
        include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    },
});
