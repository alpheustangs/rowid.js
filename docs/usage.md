# RowID Usage

This documentation provides the usage of RowID.

## Installation

Install RowID as a dependency:

```bash
# NPM
npm install rowid

# Yarn
yarn add rowid

# PNPM
pnpm add rowid
```

## Functions

RowID provides the following functions:

#### `RowID`

This function generates a 32-character unique ID that is almost impossible to duplicate.

```typescript
import RowID from "rowid";

const id: string = RowID();

console.log(typeof id === "string"); // true
```

Or you can specify the number of randomness, a larger number will generate a longer ID, with less chance of collision.

```typescript
import RowID from "rowid";

const id: string = RowID(6);

console.log(id.length === (10 + 6)); // true
```

#### `encode`

This function encodes the timestamp into a ID without randomness.

```typescript
import { encode } from "rowid";

const result: string = encode(new Date().getTime());

console.log(typeof result === "string"); // true
```

#### `decode`

This function decodes the ID into a Date.

```typescript
import { RowID, decode } from "rowid";

const id: string = RowID();
const result: Date = decode(id);

console.log(result instanceof Date); // true
```

#### `generate`

This function generates a ID based on the input.

```typescript
import { generate } from "rowid";

generate(new Date().getTime(), 22);
```

#### `verify`

This function verifies if the ID is valid and natural.

```typescript
import { RowID, verify } from "rowid";

const id: string = RowID();

verify(id);
```

#### `getRandomness`

This function generates randomness with different methods based on the environment.

```typescript
import { getRandomness } from "rowid";

const result: string = getRandomness(6);

console.log(typeof result === "string"); // true
console.log(result.length === 6); // true
```

#### `RowIDWithConfig`

This function allows you to customize how RowID works, and returns the modified functions based on the parameters.

```typescript
import type { RowIDWithConfigResult } from "rowid";

import { RowIDWithConfig } from "rowid";

const { RowID }: RowIDWithConfigResult = RowIDWithConfig({
    charList: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
    randomnessLength: 6,
});

const id: string = RowID();

console.log(id.length === (10 + 6)); // true
```
