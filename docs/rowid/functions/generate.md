[rowid](../README.md) / generate

# Function: generate()

> **generate**(`timestamp`, `randomnessLength`): [`GenerateResult`](../type-aliases/GenerateResult.md)

This function generates a ID based on the input.

### Example

```typescript
import type { GenerateResult } from "rowid";
import { generate } from "rowid";

const current: number = new Date().getTime();
const result: GenerateResult = generate(current, 22);
```

## Parameters

• **timestamp**: `number`

• **randomnessLength**: `number` = `RANDOMNESS_LENGTH`

## Returns

[`GenerateResult`](../type-aliases/GenerateResult.md)

## Defined in

[base/rowid.ts:93](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowid.ts#L93)
