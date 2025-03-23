import { installCommand } from '@/commands/install.command'
import { mergeCommand } from '@/commands/merge.command'
import { unmergeCommand } from '@/commands/unmerge.command'
import { Command } from 'commander'
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
