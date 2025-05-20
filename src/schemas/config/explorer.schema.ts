import { LoggerSchema } from '@/schemas/logger/logger.schema'
import { StringSchema } from '@/schemas/utils/string'
import type { PublicExplorer } from 'cosmiconfig'
import { z } from 'zod'

export const ExplorerInstanceGetSchema = LoggerSchema.extend( {
    name: StringSchema
        .default( '' )
        .describe( 'Name of the config file' )
} )

export type ExplorerInstanceGet = z.input<typeof ExplorerInstanceGetSchema>

export const ExplorerInstanceSchema = z.object( {
    Explorer: z.custom<PublicExplorer>()
        .describe( 'Initialized config instance' )
} )
