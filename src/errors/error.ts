import ModernError from 'modern-errors'
import modernErrorsWinston from 'modern-errors-winston'

export const BaseError = ModernError.subclass( 'BaseError', {
    plugins: [ modernErrorsWinston ]
} )

export const UnknownError = BaseError.subclass( 'UnknownError' )
