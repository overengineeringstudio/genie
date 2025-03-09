import path from 'node:path'

import * as Cli from '@effect/cli'
import { FileSystem } from '@effect/platform'
import * as PlatformNode from '@effect/platform-node'
import { Effect, Stream } from 'effect'

const genie = Cli.Command.make(
	'genie',
	{
		cwd: Cli.Options.text('cwd').pipe(Cli.Options.withDefault(process.cwd())),
		watch: Cli.Options.boolean('watch').pipe(
			Cli.Options.withDescription(
				'Whether to watch for changes and regenerate',
			),
			Cli.Options.withDefault(false),
		),
		// TODO replace writeable with readOnly
		// readOnly: Cli.Options.boolean('read-only').pipe(
		//   Cli.Options.withDescription('Whether to set generated files as read-only'),
		//   Cli.Options.withDefault(true),
		//   Cli.Options.optional,
		// ),
		writeable: Cli.Options.boolean('writeable').pipe(
			Cli.Options.withDescription('Whether to set generated files as writable'),
			Cli.Options.withDefault(false),
		),
	},
	Effect.fn(function* ({ cwd, writeable, watch }) {
		// console.log({ cwd, readOnly })
		const readOnly = !writeable
		const fs = yield* FileSystem.FileSystem
		const isGenieFile = (file: string) => file.endsWith('.genie.ts')

		const genieFiles = yield* fs
			.readDirectory(cwd)
			.pipe(Effect.map((files) => files.filter(isGenieFile)))

		for (const genieFile of genieFiles) {
			yield* generateFile({ fs, cwd, genieFileName: genieFile, readOnly })
		}

		if (watch) {
			yield* fs.watch(cwd).pipe(
				Stream.filter(({ path }) => isGenieFile(path)),
				Stream.tap(({ path }) =>
					generateFile({ fs, cwd, genieFileName: path, readOnly }),
				),
				Stream.runDrain,
			)
		}
	}),
)

const generateFile = Effect.fn('generateFile')(function* ({
	fs,
	cwd,
	genieFileName,
	readOnly,
}: {
	fs: FileSystem.FileSystem
	cwd: string
	genieFileName: string
	readOnly: boolean
}) {
	// To avoid import cache issues
	const importPath = `${path.join(cwd, genieFileName)}?import=${Date.now()}`
	const targetFileName = genieFileName.replace('.genie.ts', '')

	const fileContentString = yield* Effect.tryPromise(
		() => import(importPath),
	).pipe(Effect.map((module) => module.default as string))

	const targetFilePath = path.join(cwd, targetFileName)

	yield* fs.remove(targetFilePath)
	yield* fs.writeFileString(targetFilePath, fileContentString)
	yield* Effect.log(
		`Generated ${targetFilePath} ${readOnly ? '(read-only)' : '(writable)'}`,
	)

	if (readOnly) {
		yield* fs.chmod(targetFilePath, 0o444)
	}
})

Cli.Command.run(genie, {
	name: 'Genie',
	version: '0.0.0',
})(process.argv).pipe(
	Effect.provide(PlatformNode.NodeContext.layer),
	PlatformNode.NodeRuntime.runMain,
)
