/**
 * Reference: https://www.typescriptlang.org/tsconfig
 */
export type TSConfigArgs = {
	/** Specifies which files to include in the program */
	include?: string[]
	/** Specifies files to be excluded from the program */
	exclude?: string[]
	/** Explicitly specify the files to include in the program */
	files?: string[]
	/** Extends existing configuration from a base file */
	extends?: string | string[]
	/** References to other project configuration files */
	references?: { path: string; prepend?: boolean }[]
	/** Compiler options */
	compilerOptions?: {
		/** Allow JavaScript files to be compiled */
		allowJs?: boolean
		/** Allow default imports from modules with no default export */
		allowSyntheticDefaultImports?: boolean
		/** Allow 'import x from y' when a module doesn't have a default export */
		esModuleInterop?: boolean
		/** Specify ECMAScript target version */
		target?:
			| 'ES3'
			| 'ES5'
			| 'ES6'
			| 'ES2015'
			| 'ES2016'
			| 'ES2017'
			| 'ES2018'
			| 'ES2019'
			| 'ES2020'
			| 'ES2021'
			| 'ES2022'
			| 'ES2023'
			| 'ES2024'
			| 'ESNext'
		/** Specify module code generation */
		module?:
			| 'CommonJS'
			| 'AMD'
			| 'System'
			| 'UMD'
			| 'ES6'
			| 'ES2015'
			| 'ES2020'
			| 'ESNext'
			| 'Node16'
			| 'NodeNext'
			| 'None'
		/** Specify library files to be included in the compilation */
		lib?: string[]
		/** Specify JSX code generation */
		jsx?: 'preserve' | 'react' | 'react-native' | 'react-jsx' | 'react-jsxdev'
		/** Generates corresponding .d.ts file */
		declaration?: boolean
		/** Generates corresponding .d.ts.map file */
		declarationMap?: boolean
		/** Output directory for generated declaration files */
		declarationDir?: string
		/** Specify file to store incremental compilation information */
		tsBuildInfoFile?: string
		/** Output directory for compiled files */
		outDir?: string
		/** Concatenate and emit output to single file */
		outFile?: string
		/** Specify the root directory of input files */
		rootDir?: string
		/** List of root folders whose combined content represents the structure of the project at runtime */
		rootDirs?: string[]
		/** Skip type checking of declaration files */
		skipLibCheck?: boolean
		/** Enable all strict type checking options */
		strict?: boolean
		/** Raise error on expressions and declarations with an implied 'any' type */
		noImplicitAny?: boolean
		/** Enable strict null checks */
		strictNullChecks?: boolean
		/** Ensure non-undefined class properties are initialized in the constructor */
		strictPropertyInitialization?: boolean
		/** Enable strict checking of function types */
		strictFunctionTypes?: boolean
		/** Enable strict 'bind', 'call', and 'apply' methods on functions */
		strictBindCallApply?: boolean
		/** Disable source of project reference redirect */
		disableSourceOfProjectReferenceRedirect?: boolean
		/** No implicit returns */
		noImplicitReturns?: boolean
		/** Report errors on unused locals */
		noUnusedLocals?: boolean
		/** Report errors on unused parameters */
		noUnusedParameters?: boolean
		/** Report errors for fallthrough cases in switch statement */
		noFallthroughCasesInSwitch?: boolean
		/** Stylize errors and messages using color and context */
		pretty?: boolean
		/** Enable incremental compilation */
		incremental?: boolean
		/** Generates corresponding .map file */
		sourceMap?: boolean
		/** Specify module resolution strategy */
		moduleResolution?: 'Node' | 'NodeNext' | 'Classic' | 'Bundler'
		/** Base directory to resolve non-relative module names */
		baseUrl?: string
		/** List of path mappings for module names to locations */
		paths?: Record<string, string[]>
		/** Emit design-type metadata for decorated declarations in source files */
		emitDecoratorMetadata?: boolean
		/** Enable experimental support for decorators */
		experimentalDecorators?: boolean
		/** Import emit helpers from 'tslib' */
		importHelpers?: boolean
		/** Enable project compilation */
		composite?: boolean
		/** Disallow inconsistently-cased references to the same file */
		forceConsistentCasingInFileNames?: boolean
		/** Ensure overriding members in derived classes are marked with an override modifier */
		noImplicitOverride?: boolean
		/** Disable emitting comments */
		removeComments?: boolean
		/** Do not emit outputs if any errors were reported */
		noErrorTruncation?: boolean
		/** Do not emit outputs if any errors were reported */
		noEmitOnError?: boolean
		/** Enable strict null checks for indexing objects lacking index signatures */
		noUncheckedIndexedAccess?: boolean
		/** Disable emitting declarations that have '@internal' in their JSDoc comments */
		stripInternal?: boolean
		/** Disable emitting files from a compilation */
		noEmit?: boolean
		/** Allow accessing UMD globals from modules */
		allowUmdGlobalAccess?: boolean
		/** Emit imports for non-esm modules */
		isolatedModules?: boolean
		/** Disable reporting of excess property errors during assignment */
		suppressExcessPropertyErrors?: boolean
		/** Disable reporting of implicit any errors for indexing objects lacking index signatures */
		suppressImplicitAnyIndexErrors?: boolean
		/** Specify TypeScript version for compatibility */
		typeRoots?: string[]
		/** Type declaration files to be included in compilation */
		types?: string[]
		/** List of names or patterns specifying custom transformers */
		plugins?: {
			name: string
			transform?: string
			after?: boolean
			afterDeclarations?: boolean
		}[]
		/** Enable verbose logging */
		traceResolution?: boolean
		/** Resolve keyof to string valued property names only (no numbers or symbols) */
		keyofStringsOnly?: boolean
	}
	/** TypeScript watch options */
	watchOptions?: {
		/** Use polling instead of file system events */
		watchFile?:
			| 'useFsEvents'
			| 'dynamicPriorityPolling'
			| 'fixedPollingInterval'
			| 'priorityPollingInterval'
		/** Watch directory using polling instead of file system events */
		watchDirectory?:
			| 'useFsEvents'
			| 'dynamicPriorityPolling'
			| 'fixedPollingInterval'
			| 'fixedChunkSizePolling'
		/** Specify how directories are watched on systems that lack recursive file-watching functionality */
		fallbackPolling?:
			| 'dynamicPriority'
			| 'priorityPolling'
			| 'fixedPolling'
			| 'fixedInterval'
			| 'dynamicPriorityPolling'
		/** Controls what polling strategy is used when using polling */
		synchronousWatchDirectory?: boolean
		/** Exclude files from triggering a compilation */
		excludeFiles?: string[]
		/** Exclude directories from triggering a compilation */
		excludeDirectories?: string[]
	}
	/** TypeScript formatting options */
	ts_node?: {
		/** Use TypeScript's compiler host API */
		compilerHost?: boolean
		/** JSON object to merge with compiler options */
		compilerOptions?: Record<string, any>
		/** Emit output files into `.ts-node` directory */
		emit?: boolean
		/** Load files from `tsconfig.json` on startup */
		files?: boolean
		/** Override the path patterns to skip compilation */
		ignore?: string[]
		/** Ignore TypeScript warnings by diagnostic code */
		ignoreDiagnostics?: (string | number)[]
		/** Transpile with swc instead of the TypeScript compiler */
		swc?: boolean
		/** Use pretty diagnostic formatter */
		pretty?: boolean
		/** Use TypeScript's faster `transpileModule` */
		transpileOnly?: boolean
		/** Re-order file extensions so that TypeScript imports are preferred */
		preferTsExts?: boolean
		/** Modules to require, like node's `--require` flag */
		require?: string[]
		/** Skip ignore check, so that compilation will be attempted for all files */
		skipIgnore?: boolean
		/** Use TypeScript's compiler for transpilation */
		compiler?: string
		/** Path to TypeScript compiler, e.g. `/path/to/typescript/lib/typescript.js` */
		transpiler?: string
	}
}

/**
 * Creates a tsconfig.json configuration object
 * @param args TSConfig configuration options
 * @returns A properly formatted tsconfig.json object
 */
export const tsconfigJSON = (args: TSConfigArgs): string => {
	return JSON.stringify(args, null, 2)
}
