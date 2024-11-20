[rowid](../README.md) / verify

# Function: verify()

> **verify**(`encoded`): [`VerifyResult`](../type-aliases/VerifyResult.md)

This function verifies if the ID is valid and natural.

### Example

```typescript
import type { VerifyResult } from "rowid";
import { RowID, verify } from "rowid";

const id: string = RowID();
const result: VerifyResult = verify(id);
```

## Parameters

• **encoded**: `string`

## Returns

[`VerifyResult`](../type-aliases/VerifyResult.md)

## Defined in

[base/rowid.ts:117](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowid.ts#L117)
