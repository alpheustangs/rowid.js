import type { PackageJson } from "#/@types/packageJson";

import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import * as path from "node:path";

const readPackageJson = async (): Promise<PackageJson | null> => {
    // root/dist/index.js -> root/package.json
    const _path: string = path.resolve(__dirname, "..", "package.json");

    if (!fs.existsSync(_path)) return null;

    return await fsp
        .readFile(_path, "utf-8")
        .then((data: string): PackageJson => JSON.parse(data));
};

export type { PackageJson };
export { readPackageJson };
