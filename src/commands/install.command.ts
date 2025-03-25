import install from '@/actions/install'
import { Command } from 'commander'

export const installCommand = new Command( 'install' )
    .description( 'Install command' )
    .option( '-i, --input <path>', 'Directorio de entrada con archivos TS', './translations' )
    .option( '-o, --output <path>', 'Directorio de salida para los JSON', './locales' )
    .action( ( options ) => {
        console.log( options )
        install()
    } )
