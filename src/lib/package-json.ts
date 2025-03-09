/**
 * Reference: https://github.com/sindresorhus/type-fest/blob/main/source/package-json.d.ts
 */
export type PackageJSONArgs = {
  /** Package name */
  name?: string
  /** Package version */
  version?: string
  /** Package description */
  description?: string
  /** Package keywords */
  keywords?: string[]
  /** Homepage URL */
  homepage?: string
  /** Bug tracker URL or configuration */
  bugs?:
    | string
    | {
        url?: string
        email?: string
      }
  /** License information */
  license?: string
  /** Author information */
  author?:
    | string
    | {
        name: string
        email?: string
        url?: string
      }
  /** Contributors information */
  contributors?: (
    | string
    | {
        name: string
        email?: string
        url?: string
      }
  )[]
  /** Repository information */
  repository?:
    | string
    | {
        type: string
        url: string
        directory?: string
      }
  /** Main entry point */
  main?: string
  /** Module entry point for ES modules */
  module?: string
  /** TypeScript types definition file */
  types?: string
  /** TypeScript declaration files */
  typings?: string
  /** Exported files */
  files?: string[]
  /** Package entry points (modern format) */
  exports?: Record<
    string,
    | string
    | Record<string, string>
    | {
        import?: string
        require?: string
        node?: string
        default?: string
        types?: string
      }
  >
  /** Package type, like "module" or "commonjs" */
  type?: 'module' | 'commonjs'
  /** Binary files */
  bin?: string | Record<string, string>
  /** Man pages */
  man?: string | string[]
  /** Directories configuration */
  directories?: {
    lib?: string
    bin?: string
    man?: string
    doc?: string
    example?: string
    test?: string
  }
  /** Package scripts */
  scripts?: Record<string, string>
  /** Config values */
  config?: Record<string, unknown>
  /** Dependencies */
  dependencies?: Record<string, string>
  /** Development dependencies */
  devDependencies?: Record<string, string>
  /** Peer dependencies */
  peerDependencies?: Record<string, string>
  /** Optional peer dependencies */
  peerDependenciesMeta?: Record<
    string,
    {
      optional?: boolean
    }
  >
  /** Optional dependencies */
  optionalDependencies?: Record<string, string>
  /** Bundled dependencies */
  bundledDependencies?: string[]
  /** Engines requirements */
  engines?: {
    node?: string
    npm?: string
    pnpm?: string
    yarn?: string
  }
  /** OS compatibility */
  os?: string[]
  /** CPU compatibility */
  cpu?: string[]
  /** Private package flag */
  private?: boolean
  /** Publish configuration */
  publishConfig?: {
    access?: 'public' | 'restricted'
    registry?: string
    tag?: string
    [key: string]: unknown
  }
  /** Workspace configuration */
  workspaces?:
    | string[]
    | {
        packages?: string[]
      }
  /** PNPM-specific configuration */
  pnpm?: {
    /** PNPM overrides configuration */
    overrides?: Record<string, string>
    /** Package extensions */
    packageExtensions?: Record<
      string,
      {
        dependencies?: Record<string, string>
        peerDependencies?: Record<string, string>
      }
    >
    /** Peer dependency settings */
    peerDependencyRules?: {
      allowedVersions?: Record<string, string>
      ignoreMissing?: string[]
    }
  }
  /** NPM and PNPM hooks */
  hooks?: Record<string, string>
  /** Side effects flag for tree-shaking */
  sideEffects?: boolean | string[]
  /** Browser compatibility */
  browser?: string | Record<string, string | false>
  /** Funding information */
  funding?:
    | string
    | {
        type?: string
        url?: string
      }
    | (
        | string
        | {
            type?: string
            url?: string
          }
      )[]
  /** Flat configuration for pnpm */
  resolutions?: Record<string, string>
  /** Package source preferences */
  preferUnplugged?: boolean
  /** Package manager */
  packageManager?: string
}

/**
 * Creates a package.JSON configuration object
 * @param args Package.JSON configuration options
 * @returns A properly formatted package.JSON object
 */
export const packageJSON = (
  args: PackageJSONArgs,
  options?: { stringify?: (args: PackageJSONArgs) => string },
): string => {
  // Validate required fields for publishing if not marked as private
  if (args.private !== true) {
    if (args.name === undefined) {
      console.warn('Warning: Package is not private but missing a name')
    }
    if (args.version === undefined) {
      console.warn('Warning: Package is not private but missing a version')
    }
  }

  // Return a clean package.JSON object (without undefined values)
  return options?.stringify?.(args) ?? JSON.stringify(args, null, 2)
}
