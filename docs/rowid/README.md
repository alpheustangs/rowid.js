# rowid

## References

### default

Renames and re-exports [RowID](functions/RowID.md)

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [GenerateResult](type-aliases/GenerateResult.md) | Result of the `generate` function. |
| [RowIDWithConfigOptions](type-aliases/RowIDWithConfigOptions.md) | Options for the `RowIDWithConfig` function. |
| [RowIDWithConfigResult](type-aliases/RowIDWithConfigResult.md) | Result of the `RowIDWithConfig` function. |
| [VerifyResult](type-aliases/VerifyResult.md) | Result of the `verify` function. |

## Functions

| Function | Description |
| ------ | ------ |
| [decode](functions/decode.md) | This function decodes the ID into a Date. |
| [encode](functions/encode.md) | This function encodes the timestamp into a ID without randomness. |
| [generate](functions/generate.md) | This function generates a ID based on the input. |
| [getRandomness](functions/getRandomness.md) | This function generates randomness with different methods based on the environment. |
| [RowID](functions/RowID.md) | This function generates a 32-character unique ID that is almost impossible to duplicate. |
| [RowIDWithConfig](functions/RowIDWithConfig.md) | This function allows you to customize how RowID works, and returns the modified functions based on the parameters. |
| [verify](functions/verify.md) | This function verifies if the ID is valid and natural. |
