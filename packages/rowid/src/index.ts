import type { GenerateResult } from "#/@types/generate";
import type { VerifyResult } from "#/@types/verify";
import type {
    RowIDWithConfigOptions,
    RowIDWithConfigResult,
} from "#/base/rowidWithConfig";

import {
    RowID,
    decode,
    encode,
    generate,
    getRandomness,
    verify,
} from "#/base/rowid";
import { RowIDWithConfig } from "#/base/rowidWithConfig";

export default RowID;
export type {
    GenerateResult,
    VerifyResult,
    RowIDWithConfigOptions,
    RowIDWithConfigResult,
};
export {
    RowID,
    RowIDWithConfig,
    encode,
    decode,
    generate,
    verify,
    getRandomness,
};
