import { tsconfigJSON } from '@overengineering/genie'

export default tsconfigJSON({
  compilerOptions: {
    strict: true,
    noUncheckedIndexedAccess: true,
    esModuleInterop: true,
    sourceMap: true,
    declarationMap: true,
    declaration: true,
    strictNullChecks: true,
    incremental: true,
    composite: true,
    allowJs: true,
    skipLibCheck: true,
    stripInternal: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    noErrorTruncation: false,
    isolatedModules: true,
    target: 'ES2024',
    lib: ['ES2024'],
    module: 'NodeNext',
    moduleResolution: 'nodenext',
    // NOTE this is helping to speed up tsc performance (particularly in VSC during auto-complete) - Thanks Patrick Roza
    disableSourceOfProjectReferenceRedirect: true,
    plugins: [{ name: '@effect/language-service' }],
    outDir: 'dist',
    tsBuildInfoFile: 'dist/.tsbuildinfo',
  },
  include: ['src/**/*.ts', '**/*.genie.ts'],
})
