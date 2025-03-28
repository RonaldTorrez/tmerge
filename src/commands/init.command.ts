import init from '@/commands/actions/init'
import { Command } from 'commander'

export const initCommand = new Command( 'init' )
    .description( 'Install command' )
    .option( '-i, --input <path>', 'Directorio de entrada con archivos TS', './translations' )
    .option( '-o, --output <path>', 'Directorio de salida para los JSON', './locales' )
    .action( ( options ) => {
        console.log( options )
        init()
    } )
