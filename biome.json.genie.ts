import { biomeJSON } from '@overengineering/genie'

export default biomeJSON({
    "vcs": {
        "enabled": false,
        "clientKind": "git",
        "useIgnoreFile": false
    },
    "files": {
        "ignoreUnknown": false,
        "ignore": []
    },
    "formatter": {
        "enabled": true,
        "indentStyle": "space",
        "indentWidth": 2
    },
    "organizeImports": {
        "enabled": true
    },
    "linter": {
        "enabled": true,
        "rules": {
        "recommended": true,
        "suspicious": {
            "noExplicitAny": "off"
        }
        }
    },
    "javascript": {
        "formatter": {
        "quoteStyle": "single",
        "trailingCommas": "all",
        "semicolons": "asNeeded"
        }
    }
})
