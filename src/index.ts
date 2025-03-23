import { installCommand } from '@/commands/install.command'
import { mergeCommand } from '@/commands/merge.command'
import { unmergeCommand } from '@/commands/unmerge.command'
import { Command } from 'commander'
import pkg from '../package.json'

const program = new Command()

program
	.name( pkg.name )
	.description( pkg.description )
	.version( pkg.version )

program.addCommand( installCommand )
program.addCommand( mergeCommand )
program.addCommand( unmergeCommand )

program.parse()
