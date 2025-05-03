import { Schema } from "effect"

// TODO support other sources
export const ConverterSource = Schema.TaggedStruct('json-schema', {
  url: Schema.URL,
})

// TODO support other outputs
export const ConverterOutput = Schema.TaggedStruct('json', {
})

export const ConverterConfig = Schema.Struct({
  id: Schema.NonEmptyString,
  name: Schema.NonEmptyString,
  description: Schema.optional(Schema.String),
  source: ConverterSource,
  output: ConverterOutput,
})

export type ConverterConfig = typeof ConverterConfig.Type

export const GeneratorConfig = Schema.Struct({
  converters: Schema.Array(ConverterConfig),
})

export type GeneratorConfig = typeof GeneratorConfig.Type