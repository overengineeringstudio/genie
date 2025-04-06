# `@overengineering/genie` 🧞

`@overengineering/genie` lets you write your config files (e.g. `package.json`, `tsconfig.json`, ...) in TypeScript and automatically generate the 

## Features

- TypeScript: You get the full power of TypeScript to write your config files
- Simple: Each `some-file.json.genie.ts` file generates a `some-file.json` file
- Watch mode
- Generates files as read-only (to encourage changes only via `genie` files)

## Example

```ts
import { packageJSON } from "@overengineering/genie";
import { commonDependencies, TYPESCRIPT_VERSION } from '../shared/repo.js'

export default packageJSON({
  name: "my-package",
  version: "1.0.0",
  description: "My package",
  type: "module",
  exports: {
    // You can have comments to explain why something is the way it is
    ".": "./dist/index.js"
  },
  scripts: {
    build: "tsc"
  },
  dependencies: {
    ...commonDependencies
  },
  devDependencies: {
    typescript: TYPESCRIPT_VERSION
  }
})
```

## Usage

```bash
bunx @overengineering/genie **/*.genie.ts

# or with global install
bun add -g @overengineering/genie
genie **/*.genie.ts
```

## File plugins

### Built-in

- `packageJSON`
- `tsconfigJSON`

### Wishlist

- GitHub actions
- VSCode settings

### Build your own

```ts
// my-plugin.ts
type MyPluginArgs = {
  // ...
}

export const myPlugin = (args: MyPluginArgs): string => {
  // ...
  return '...'
}

// my-config.genie.ts
import { myPlugin } from './my-plugin.js'

export default myPlugin({
  // ...
})
```

## FAQ

### What problems does `genie` solve?

A modern TypeScript codebase (especially monorepos) contain a lot of config/setup files (e.g. `package.json`, `tsconfig.json`, ...) which exhibit the following problems:

- No comments (e.g. to explain why a particular line of config is needed and how it relates to other parts of the codebase)
- Duplication/repetition
- No type safety

Those are all problems that TypeScript is solving, so why not use TypeScript to write your config files? That's the core idea behind this project, it's now just a matter of making this approach as convenient and ergonomic as possible which is what `genie` aims to do.

### Should I add generated files to version control (e.g. add `package.json` to `git`)?

Ultimately that's up to you, but it can be useful to speed up CI processes and avoid having to regenerate the files.

### Where does the name `genie` come from?

Together with my friend [Nathan Herald](https://github.com/myobie) we've been thinking of names of this project related to "TypeScript", code generation and which should be short and memorable. After a bit of brainstorming we came up with `genie` and we both liked it. 🧞

## Development of `genie`

### Design goals

- Simple
- Fast
- Flexible

### Local setup

Requires:
- Bun
- PNPM

```bash
pnpm install
pnpm build
# or `pnpm watch` to run in watch mode
```

### Adding new converters

Genie is capable of generating new converters when pointing it to a valid JSON Schema.

Open the `genie.config.json` in this repository and add a new converter configuration entry, like:

```json
{
  "converters": [
    {
      "id": "my-config-json",
      "name": "Support for my-config-json",
      "source": {
        "type": "json-schema",
        "url": "https://examples.com/path/to/json-schema-definition"
      },
      "output": {
        "format": "json"
      }
    },
  ]
}
```

Afterwards, when executing `pnpm build`, Genie is capable of handling this configuration format as well:

```ts
import { myConfigJSON } from '@overengineering/genie'

export default myConfigJSON({
  // ...
})
```

### Todo

- Support inline JS execution (e.g. for `package.json` scripts)
- Derive Effect schema from JSON schemas (e.g. for Biome plugin)
- VSCode extension
  - e.g. version auto-completion in `package.json.genie.ts` dependencies
  - Auto-regenerate on save
