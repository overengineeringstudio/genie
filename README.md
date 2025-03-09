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

## Supported Formats

- `package.json`
- `tsconfig.json`

## FAQ

### What problems does `genie` solve?

A modern TypeScript codebase (especially monorepos) contain a lot of config/setup files (e.g. `package.json`, `tsconfig.json`, ...) which exhibit the following problems:

- No comments (e.g. to explain why a particular line of config is needed and how it relates to other parts of the codebase)
- Duplication/repetition

### Where does the name `genie` come from?

Together with my friend [Nathan Herald](https://github.com/myobie) we've been thinking of names of this project related to "TypeScript", code generation and which should be short and memorable. After a bit of brainstorming we came up with `genie` and we both liked it. 🧞

## Todo

- Support inline JS execution (e.g. for `package.json` scripts)
- Derive Effect schema from JSON schemas (e.g. for Biome plugin)
- VSCode extension
  - e.g. version auto-completion in `package.json.genie.ts` dependencies
  - Auto-regenerate on save
