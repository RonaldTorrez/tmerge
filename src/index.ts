import { initCommand } from '@/commands/init.command'
import { mergeCommand } from '@/commands/merge.command'
import { unmergeCommand } from '@/commands/unmerge.command'
import { DESCRIPTION, NAME, VERSION } from '@/const/app.const'
import { UnknownError } from '@/errors/error'
import LoggerInstance from '@/logger/logger'
import { Command } from 'commander'
import { Logger } from 'winston'

const program = new Command()

program
    .name( NAME )
    .description( DESCRIPTION )
    .version( VERSION )

program.addCommand( initCommand )
program.addCommand( mergeCommand )
program.addCommand( unmergeCommand )

program.parse()

const logger: Logger = LoggerInstance.get( {} )
const error = new UnknownError( 'Test error', { props: { test: 'test' } } )

logger.error( error )
