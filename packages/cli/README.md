# RowID CLI

CLI for RowID

## Installation

For NPM:

```bash
npm i -g rowid-cli
```

For PNPM:

```bash
pnpm i -g rowid-cli
```

## Usage

Check the usage of RowID CLI with the following command:

```bash
rowid -h
```

## Customization

After installing the CLI and running it once, you may customize its behavior by editing the `.rowid.json` file located in the current user's home directory. For type checking, please reference to the `schema.json` file included in the root directory of the CLI project.

```json
{
    "$schema": "/path/to/cli/schema.json"
}
```

## License

This project is MIT licensed, you can find the license file [here](./LICENSE).
