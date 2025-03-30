import { Logger } from 'winston'
import { z } from 'zod'

export const LoggerGetSchema = z.object( {
    isVerbose: z
        .boolean()
        .default( false )
        .describe( 'Define if the logger should be verbose or not' )

} )

export type LoggerGet = z.input<typeof LoggerGetSchema>

export const LoggerSchema = z.object( {
    logger: z.instanceof( Logger )
        .describe( 'Logger instance' )
} )
