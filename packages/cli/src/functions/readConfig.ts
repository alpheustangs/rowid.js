import type { Config } from "#/@types/config";

import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";

import { CHAT_LIST, RANDOMNESS_LENGTH } from "#/common";

const readConfig = async (): Promise<Config> => {
    const _path: string = path.resolve(os.homedir(), ".rowid.json");

    if (!fs.existsSync(_path)) {
        const _config: Config = {
            charList: CHAT_LIST,
            randomnessLength: RANDOMNESS_LENGTH,
        };

        await fsp.writeFile(_path, JSON.stringify(_config, null, 4));

        return _config;
    }

    return await fsp
        .readFile(_path, "utf-8")
        .then((data: string): Config => JSON.parse(data));
};

export type { Config };
export { readConfig };
