# RowID CLI Usage

This documentation provides the usage of RowID CLI.

## Installation

Install RowID CLI as a global dependency:

```bash
# NPM
npm install --global rowid-cli

# Yarn
yarn global add rowid-cli

# PNPM
pnpm add --global rowid-cli
```

## Commands

RowID CLI provides the following commands:

#### `rowid`

This command generates a 32-character unique ID that is almost impossible to duplicate. You may pass the `-r` / `--randomness` option to specify the number of randomness, a larger number will generate a longer ID, with less chance of collision.

#### `rowid encode <date>`

This command encodes the timestamp into a ID without randomness.

#### `rowid decode <encoded>`

This command decodes the ID into a Date.

#### `rowid generate <date> [number]`

This command generates a ID based on the input. Since the `number` argument is optional, you may omit it. 

#### `rowid verify <encoded>`

This command verifies if the ID is valid and natural.

#### `rowid random <number>`

This command generates randomness.

## Customization

After installing the CLI and running it once, you may customize its behavior by editing the `.rowid.json` file located in the current user's home directory. For type checking, please reference to the `schema.json` file included in the root directory of the CLI project.

```json
{
    "$schema": "/path/to/cli/schema.json"
}
```