# RowID

A time-based unique ID solution.

## Quick Start

Create an ID with the following code:

```ts
import RowID from "rowid";

const id: string = RowID();
```

Or start a customization with the following code:

```ts
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { RowID }: RowIDWithConfigResult = RowIDWithConfig({
    charList: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
    randomnessLength: 22,
});

const id: string = RowID();
```

## License

This project is licensed under the terms of the MIT license.
