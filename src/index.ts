import { Command } from 'commander'

const program = new Command()

program
	.name( 'transmerge' )
	.description( 'Herramienta de línea de comandos para transmerge' )
	.version( '1.0.0' )
	.option( '-f, --file <path>', 'Especifica el archivo a procesar' )
	.action( ( options ) => {
		console.log( `Procesando el archivo: ${options.file}` )
	} )
	.parse( process.argv )
