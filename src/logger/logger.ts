import { BaseError } from '@/errors/error'
import { LoggerGet, LoggerGetSchema } from '@/schemas/logger/logger.schema'
import { createLogger, format, Logger, transports } from 'winston'
import { fromZodError, isZodErrorLike } from 'zod-validation-error'

const zodErrorFormatter = format( ( info ) => {
    if ( isZodErrorLike( info ) ) {
        return {
            ...info,
            message: fromZodError( info ).toString()
        }
    }

    if ( isZodErrorLike( info?.message ) ) {
        const zodError = info.message

        return {
            ...info,
            message: fromZodError( zodError ).toString()
        }
    }

    return info
} )

class LoggerInstance {
    private static instance: Logger

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static get(
        options: LoggerGet
    ): Logger {
        const { isVerbose } = LoggerGetSchema.parse( options )

        if ( !LoggerInstance.instance ) {
            const consoleFormat = format.combine(
                format.cli()
            )

            const fileFormat = format.combine(
                format.timestamp(),
                format.json()
            )

            LoggerInstance.instance = createLogger( {
                level: isVerbose ? 'debug' : 'error',
                format: format.combine(
                    zodErrorFormatter(),
                    BaseError.fullFormat()
                ),

                transports: [
                    new transports.Console( {
                        format: consoleFormat
                    } ),
                    new transports.File( {
                        dirname: './logs',
                        filename: 'tmerge.log',
                        lazy: true,
                        format: fileFormat
                    } )
                ],
                exceptionHandlers: [
                    new transports.File( {
                        dirname: './logs',
                        filename: 'exceptions.log',
                        lazy: true,
                        format: fileFormat
                    } )
                ]
            } )
        }

        return LoggerInstance.instance
    }
}

export default LoggerInstance
