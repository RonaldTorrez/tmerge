import unmerge from '@/commands/actions/unmerge'
import { Command } from 'commander'

export const unmergeCommand = new Command( 'unmerge' )
    .description( 'Unmerge command' )
    .option( '-i, --input <path>', 'Directorio de entrada con archivos TS', './translations' )
    .option( '-o, --output <path>', 'Directorio de salida para los JSON', './locales' )
    .action( ( options ) => {
        console.log( options )
        unmerge()
    } )
