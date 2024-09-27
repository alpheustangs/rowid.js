# RowID

A time-based unique ID solution.

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

## Quick Start

You may create a RowID with the following code:

```typescript
import RowID from "rowid";

const id: string = RowID();
```

Or customize the RowID with the following code:

```typescript
import type { RowIDWithConfigResult } from "rowid";
import { RowIDWithConfig } from "rowid";

const { RowID }: RowIDWithConfigResult = RowIDWithConfig({
    charList: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
    randomnessLength: 22,
});

const id: string = RowID();
```

For more information, please refer to [docs/usage.md](./docs/usage.md).

For the CLI, please refer to [docs/cli.md](./docs/cli.md).

## License

This project is MIT licensed, 
you can find the license file [here](./LICENSE).
