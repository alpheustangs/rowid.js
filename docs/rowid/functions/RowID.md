[rowid](../README.md) / RowID

# Function: RowID()

> **RowID**(`randomnessLength`): `string`

This function generates a 32-character unique ID
that is almost impossible to duplicate.

Or you can specify the number of randomness,
a larger number will generate a longer ID,
with less chance of collision.

### Example

```typescript
import RowID from "rowid";

const id: string = RowID();
```

With specified randomness:

```typescript
import RowID from "rowid";

const id: string = RowID(6);
```

## Parameters

• **randomnessLength**: `number` = `RANDOMNESS_LENGTH`

## Returns

`string`

## Defined in

[base/rowid.ts:36](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowid.ts#L36)
