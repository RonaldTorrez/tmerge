import { z } from 'zod'

export const LoggerGetSchema = z.object( {
    isVerbose: z
        .boolean()
        .default( false )
        .describe( 'Define if the logger should be verbose or not' )

} )

export type LoggerGet = z.input<typeof LoggerGetSchema>
