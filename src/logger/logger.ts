import { createLogger, format, Logger as WinstonLogger, transports } from 'winston'

const formatError = format( ( info ) => {
    if ( info.error instanceof Error ) {
        // @ts-expect-error Property 'rest' extracted from type 'Error' or type 'ErrorConstructor'
        const { message, stack, name, ...rest } = info.error as never
        const extraProperties = Object.keys( rest ).length > 0 ? rest : undefined

        info.error = {
            name,
            message,
            stack,
            ...( extraProperties && { extra: extraProperties } )
        }
    }

    return info
} )

class Logger {
    private static instance: WinstonLogger

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static get( { isVerbose = false }: { isVerbose?: boolean } ): WinstonLogger {
        if ( !Logger.instance ) {
            const consoleFormat = format.combine(
                format.cli()
            )

            const fileFormat = format.combine(
                formatError(),
                format.timestamp(),
                format.errors( { stack: true } ),
                format.metadata( { fillExcept: [ 'message', 'level', 'timestamp' ] } ),
                format.json()
            )

            Logger.instance = createLogger( {
                level: isVerbose ? 'debug' : 'error',
                transports: [
                    new transports.Console( { format: consoleFormat } ),
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

        return Logger.instance
    }
}

export default Logger
