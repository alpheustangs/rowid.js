[rowid](../README.md) / RowIDWithConfig

# Function: RowIDWithConfig()

> **RowIDWithConfig**(`options`): `object`

This function allows you to customize how RowID works,
and returns the modified functions based on the parameters.

### Example

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const {
    RowID,
    encode,
    decode,
    generate,
    verify,
    getRandomness,
}: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});
```

## Parameters

• **options**: [`RowIDWithConfigOptions`](../type-aliases/RowIDWithConfigOptions.md)

## Returns

`object`

### decode()

> **decode**: (`encoded`) => `Date`

This function decodes the ID into a Date.

#### Example

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { decode }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const decoded: Date = decode("0123456789");
```

#### Parameters

• **encoded**: `string`

#### Returns

`Date`

### encode()

> **encode**: (`timestamp`) => `string`

This function encodes the timestamp into a ID without randomness.

#### Example

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { encode }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const encoded: string = encode(new Date().getTime());
```

#### Parameters

• **timestamp**: `number`

#### Returns

`string`

### generate()

> **generate**: (`timestamp`, `randomnessLength`) => [`GenerateResult`](../type-aliases/GenerateResult.md)

This function generates a ID based on the input.

#### Example

```typescript
import type { RowIDWithConfigResult, GenerateResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { generate }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const current: number = new Date().getTime();
const result: GenerateResult = generate(current, 32 - 10);
```

#### Parameters

• **timestamp**: `number`

• **randomnessLength**: `number` = `_randomnessLength`

#### Returns

[`GenerateResult`](../type-aliases/GenerateResult.md)

### getRandomness()

> **getRandomness**: (`randomnessLength`) => `string`

This function generates randomness with different methods based on the environment.

#### Example

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { getRandomness }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const result: string = getRandomness(6);
```

#### Parameters

• **randomnessLength**: `number`

#### Returns

`string`

### RowID()

> **RowID**: (`randomnessLength`) => `string`

This function generates a unique ID
that is almost impossible to duplicate.

Or you can specify the number of randomness,
a larger number will generate a longer ID,
with less chance of collision.

#### Example

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { RowID }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const id: string = RowID();
```

#### Parameters

• **randomnessLength**: `number` = `_randomnessLength`

#### Returns

`string`

### verify()

> **verify**: (`encoded`) => [`VerifyResult`](../type-aliases/VerifyResult.md)

This function verifies if the ID is valid and natural.

#### Example

```typescript
import type { RowIDWithConfigResult, VerifyResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { verify }: RowIDWithConfigResult = RowIDWithConfig({
    // ...
});

const result: VerifyResult = verify("0123456789");
```

#### Parameters

• **encoded**: `string`

#### Returns

[`VerifyResult`](../type-aliases/VerifyResult.md)

## Defined in

[base/rowidWithConfig.ts:51](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowidWithConfig.ts#L51)
