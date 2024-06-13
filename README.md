# RowID

RowID, a time based unique ID solution.

## Install

```bash
npm i rowid
```

## Usage

Usage of RowID:

#### `RowID`

This function generates a 32 chars unique ID that is almost impossible to collide.

```typescript
import RowID from "rowid";

const id: string = RowID();

console.log(typeof id === "string"); // true
```

Or you can specify the number of random digits, a larger number will generate a longer ID, with less chance of collision.

```typescript
import RowID from "rowid";

const id: string = RowID(6);

console.log(id.length === (10 + 6)); // true
```

#### `encode`

This function encode the timestamp into a ID without random digits.

```typescript
import { encode } from "rowid";

const result: string = encode(new Date().getTime());

console.log(typeof result === "string"); // true
```

#### `decode`

This function decode the ID into a Date.

```typescript
import { RowID, decode } from "rowid";

const id: string = RowID();

const result: Date = decode(id);

console.log(result instanceof Date); // true
```

#### `generate`

This function generates a ID based on input.

```typescript
import { generate } from "rowid";

generate(new Date().getTime(), 22);
```

#### `verify`

This function verifys if the ID is valid and natural.

```typescript
import { RowID, verify } from "rowid";

const id: string = RowID();

verify(id);
```

#### `getRandomDigits`

This function generates a number of random digits.

```typescript
import { getRandomDigits } from "rowid";

const result: string = getRandomDigits(6);

console.log(typeof result === "string"); // true
console.log(result.length === 6); // true
```

#### `RowIDWithConfig`

This function allows you to customize how RowID works.

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
