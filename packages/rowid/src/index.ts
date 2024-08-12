import type {
    RowIDWithConfigOptions,
    RowIDWithConfigResult,
} from "#/base/rowidWithConfig";
import type { GenerateResult } from "#/functions/common/generate";
import type { VerifyResult } from "#/functions/common/verify";

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
