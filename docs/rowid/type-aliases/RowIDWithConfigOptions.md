[rowid](../README.md) / RowIDWithConfigOptions

# Type Alias: RowIDWithConfigOptions

> **RowIDWithConfigOptions**: `object`

Options for the `RowIDWithConfig` function.

## Type declaration

### charList?

> `optional` **charList**: `string`

The list of characters that can be used in the RowID,
it must be longer or equal to `28`.

#### Default

```ts
"0123456789ABCDEFGHJKMNPQRSTVWXYZ"
```

### randomnessLength?

> `optional` **randomnessLength**: `number`

The default length of randomness in the RowID,
it's recommended to be longer or equal to `6`.

#### Default

```ts
22
```

## Defined in

[base/rowidWithConfig.ts:14](https://github.com/alpheustangs/rowid.js/blob/68e6ee836f9687b3dbb23a54c93ad90273de5d07/packages/rowid/src/base/rowidWithConfig.ts#L14)
