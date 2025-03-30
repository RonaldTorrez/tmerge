import { CLEAN_OUTPUT, INPUT_PATH, OUTPUT_PATH } from '@/const/config.const'
import { StringNoNArraySchema, StringNoNSchema } from '@/schemas/utils/string'
import { z } from 'zod'

export const MergeSchema = z.object( {
    input: StringNoNSchema
        .default( INPUT_PATH )
        .describe( 'Directory of the input files' ),
    output: StringNoNSchema
        .default( OUTPUT_PATH )
        .describe( 'Directory of the output files' ),
    cleanOutput: z.boolean()
        .default( CLEAN_OUTPUT )
        .describe( 'Clean the output directory' ),
    cleanIgnore: z
        .union( [
            StringNoNSchema,
            StringNoNArraySchema
        ] )
        .default( [] )
        .describe(
            'Files or directories to ignore when cleaning the output directory' )
} )

export type Merge = z.input<typeof MergeSchema>
