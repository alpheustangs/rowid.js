# RowID

A time-based unique ID solution.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i rowid

# Yarn
yarn add rowid

# pnpm
pnpm add rowid
```

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

For more information, please refer to [docs/usage.md](./docs/usage.md).

For the CLI, please refer to [docs/cli.md](./docs/cli.md).

## License

This project is licensed under the terms of the MIT license.
