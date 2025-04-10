[< Back](../../README.md)

# RowID Usage

This documentation provides the usage of RowID.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i rowid

# Yarn
yarn add rowid

# pnpm
pnpm add rowid

# Deno
deno add npm:rowid

# Bun
bun add rowid
```

## Functions

RowID provides the following functions:

### `RowID`

This function generates a 32-character unique ID that is almost impossible to duplicate.

Or you can specify the number of randomness, a larger number will generate a longer ID, with less chance of collision.

Example:

```ts
import RowID from "rowid";

const id: string = RowID();
```

With specified randomness:

```ts
import RowID from "rowid";

const id: string = RowID(6);
```

### `encode`

This function encodes the timestamp into a ID without randomness.

Example:

```ts
import { encode } from "rowid";

const result: string = encode(new Date().getTime());
```

### `decode`

This function decodes the ID into a Date.

Example:

```ts
import { RowID, decode } from "rowid";

const id: string = RowID();
const result: Date = decode(id);
```

### `generate`

This function generates a ID based on the input.

Example:

```ts
import type { GenerateResult } from "rowid";

import { generate } from "rowid";

const current: number = new Date().getTime();
const result: GenerateResult = generate(current, 22);
```

### `verify`

This function verifies if the ID is valid and natural.

Example:

```ts
import type { VerifyResult } from "rowid";

import { RowID, verify } from "rowid";

const id: string = RowID();
const result: VerifyResult = verify(id);
```

### `getRandomness`

This function generates randomness with different methods based on the environment.

Example:

```ts
import { getRandomness } from "rowid";

const result: string = getRandomness(6);
```

### `RowIDWithConfig`

This function allows you to customize how RowID works, and returns the modified functions based on the parameters.

Example:

```ts
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
