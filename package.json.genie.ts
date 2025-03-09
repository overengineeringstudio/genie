import { packageJSON } from '@overengineering/genie'

export default packageJSON({
	name: '@overengineering/genie',
	version: '0.0.0',
	description: 'TypeScript code generation utilities 4',
	type: 'module',
	files: ['dist', 'src'],
	exports: {
		'.': {
			import: './dist/src/lib/mod.js',
			types: './dist/src/lib/mod.d.ts',
		},
	},
	bin: {
		genie: './dist/cli-bundle/cli.js',
	},
	scripts: {
		build_cli:
			'bun build src/cli.ts --target node --outdir dist/cli-bundle --sourcemap',
		build_cli_watch:
			'bun build src/cli.ts --target node --outdir dist/cli-bundle --sourcemap --watch',
		build_lib: 'tsc --build',
		build: 'pnpm run build_cli && pnpm run build_lib',
	},
	dependencies: {},
	devDependencies: {
		'@effect/cli': '0.57.0',
		'@effect/platform': '0.78.0',
		'@effect/platform-node': '0.74.0',
		'@effect/language-service': '0.4.0',
		typescript: '5.8.2',
		'@biomejs/biome': '1.9.4',
		'@types/node': '22.13.10',
		effect: '3.13.7',
	},
	packageManager: 'pnpm@10.2.1',
})
