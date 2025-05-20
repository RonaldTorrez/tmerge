import { ExplorerInstanceGet, ExplorerInstanceGetSchema } from '@/schemas/config/explorer.schema'
import { cosmiconfig, type PublicExplorer } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'

class ExplorerInstance {
    private static instance: PublicExplorer

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static get(
        parameters: ExplorerInstanceGet
    ): PublicExplorer {
        try {
            if ( !ExplorerInstance.instance ) {
                const { name, Logger } = ExplorerInstanceGetSchema.parse( parameters )

                Logger.info( `Initializing explorer for ${name}` )

                ExplorerInstance.instance = cosmiconfig( name, {
                    loaders: {
                        '.ts': TypeScriptLoader()
                    }
                } )

                Logger.info( 'Explorer initialized' )
            }
        } catch ( error ) {
            const { Logger } = parameters

            Logger.error( error )
        }

        return ExplorerInstance.instance
    }

}

export default ExplorerInstance
