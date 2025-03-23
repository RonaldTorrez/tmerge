import { Command } from 'commander'

export const mergeCommand = new Command( 'merge' )
	.description( 'Merge command' )
	.option( '-i, --input <path>', 'Directorio de entrada con archivos TS', './translations' )
	.option( '-o, --output <path>', 'Directorio de salida para los JSON', './locales' )
	.action( ( options ) => {
		console.log( options )
	} )
