import { installCommand } from '@/commands/install.command'
import { mergeCommand } from '@/commands/merge.command'
import { unmergeCommand } from '@/commands/unmerge.command'
import { UnknownError } from '@/errors/error'
import LoggerInstance from '@/logger/logger'
import { Command } from 'commander'
import { Logger } from 'winston'
import package_ from '../package.json'

const program = new Command()

program
    .name( package_.name )
    .description( package_.description )
    .version( package_.version )

program.addCommand( installCommand )
program.addCommand( mergeCommand )
program.addCommand( unmergeCommand )

program.parse()

const logger: Logger = LoggerInstance.get( {} )
const error = new UnknownError( 'Test error', { props: { test: 'test' } } )

logger.error( error )
