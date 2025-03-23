import { includeIgnoreFile } from '@eslint/compat'
import stylistic from '@stylistic/eslint-plugin'
import path from 'node:path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )
const gitignorePath = path.resolve( __dirname, '.gitignore' )

const rulePaddingLine1 = [ 'try', 'function', 'return', 'if', 'export' ]
const rulePaddingLine2 = [ 'const', 'import' ]

const eslintConfig = [
    includeIgnoreFile( gitignorePath ),
    {
        plugins: {
            '@stylistic': stylistic,
            '@stylistic/jsx': stylistic
        },
        rules: {
            '@stylistic/indent': [ 'error', 4 ],
            '@stylistic/jsx/jsx-indent-props': [ 'error', 4 ],
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
