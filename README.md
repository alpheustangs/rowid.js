# RowID

RowID, a time based unique ID solution.

## Install

For NPM:

```bash
npm i rowid
```

For PNPM:

```bash
pnpm i rowid
```

## Usage

Usage of RowID:

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

This function generates randomness. It use different methods to generate randomness based on the environment, such as window.crypto on web, node:crypto on Node, and Math.random if all else fails.

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
});

const id: string = RowID(6);

console.log(id.length === (10 + 6)); // true
```

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
