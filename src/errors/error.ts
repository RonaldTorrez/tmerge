import ModernError from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'
import modernErrorsClean from 'modern-errors-clean'
import modernErrorsWinston from 'modern-errors-winston'

export const BaseError = ModernError.subclass( 'BaseError', {
    plugins: [ modernErrorsWinston, modernErrorsBugs, modernErrorsClean ]
} )

export const UnknownError = BaseError.subclass( 'UnknownError', {
    bugs: 'https://github.com/larafriend/tmerge/issues'
} )
