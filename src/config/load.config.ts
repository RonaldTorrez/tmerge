import { ExplorerError } from '@/errors/error'
import { ExplorerInstanceSchema } from '@/schemas/config/explorer.schema'
import { LoggerSchema } from '@/schemas/logger/logger.schema'
import { StringNoNSchema } from '@/schemas/utils/string'
import { CosmiconfigResult } from 'cosmiconfig'
// import fs from 'fs-extra'
import { z } from 'zod'

export const LoadContentSchema = LoggerSchema
    .merge( ExplorerInstanceSchema )
    .extend( {
        filepath: StringNoNSchema
    } )

export type LoadContent = z.input<typeof LoadContentSchema>

export async function loadContent(
    parameters: LoadContent
): Promise<CosmiconfigResult> {
    try {
        const validated = LoadContentSchema.parse( parameters )
        const { Logger, filepath, Explorer } = validated

        Logger.info( `Loading ${filepath} content.` )

        // if ( !fs.pathExistsSync( filepath ) ) {
        //     throw new FSError( `File '${filepath}' does not exist.` )
        // }

        const loader: CosmiconfigResult = await Explorer.load( filepath )

        if ( !loader ) {
            throw new ExplorerError( `Error to load ${filepath}` )
        }

        Logger.info( `Content ${filepath} loaded` )

        return loader

    } catch ( error ) {
        const { Logger } = parameters

        Logger.error( error )

        // eslint-disable-next-line unicorn/no-null
        return null
    }
}
