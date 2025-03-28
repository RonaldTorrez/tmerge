// @ts-check

import { includeIgnoreFile } from '@eslint/compat'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )
const gitignorePath = path.resolve( __dirname, '.gitignore' )

const rulePaddingLine1 = [ 'try', 'function', 'return', 'if', 'export' ]
const rulePaddingLine2 = [ 'const', 'import' ]

const eslintConfig = [
    includeIgnoreFile( gitignorePath ),
    eslintPluginUnicorn.configs.all,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': [ 'error', 4 ],
            '@stylistic/no-trailing-spaces': [ 'error', { skipBlankLines: false } ],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: rulePaddingLine1, next: '*' },
                { blankLine: 'always', prev: '*', next: rulePaddingLine1 },

                { blankLine: 'always', prev: rulePaddingLine2, next: '*' },
                { blankLine: 'always', prev: '*', next: rulePaddingLine2 },
                { blankLine: 'any', prev: rulePaddingLine2, next: rulePaddingLine2 }
            ]
        }
    }
]

export default eslintConfig
