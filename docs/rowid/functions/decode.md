[rowid](../README.md) / decode

# Function: decode()

> **decode**(`encoded`): `Date`

This function decodes the ID into a Date.

### Example

```typescript
import { RowID, decode } from "rowid";

const id: string = RowID();
const result: Date = decode(id);
```

## Parameters

• **encoded**: `string`

## Returns

`Date`

## Defined in

[base/rowid.ts:73](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowid.ts#L73)
