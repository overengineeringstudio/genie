import { ConverterConfig, ConverterOutput, ConverterSource, GeneratorConfig } from "./config-defs.js"

export const config = GeneratorConfig.make({
  converters: [
    ConverterConfig.make({
      id: 'package-json',
      name: 'Support for package.json',
      source: ConverterSource.make({ url: new URL('https://json.schemastore.org/package.json') }),
      output: ConverterOutput.make({}),
    }),
    ConverterConfig.make({
      id: 'tsconfig-json',
      name: 'Support for tsconfig.json',
      source: ConverterSource.make({ url: new URL('https://json.schemastore.org/tsconfig.json') }),
      output: ConverterOutput.make({}),
    }),
    ConverterConfig.make({
      id: 'biome-json',
      name: 'Support for biome.json',
      source: ConverterSource.make({ url: new URL('https://biomejs.dev/schemas/latest/schema.json') }),
      output: ConverterOutput.make({}),
    }),
  ]
})