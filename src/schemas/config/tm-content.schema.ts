import { StringNoNSchema } from '@/schemas/utils/string'
import { z } from 'zod'

const TMContentBaseSchema = z.object( {
    _tm_omit: z.boolean()
        .default( false )
        .describe(
            'If true, this content will be omitted from the translation management system.' ),
    _tm_namespace: z.string()
        .default( '' )
        .describe(
            'This is used to group related translations together.' )
} )

const RecursiveValueSchema: z.ZodType = z.lazy( () =>
    z.union( [
        StringNoNSchema,
        z.record(
            StringNoNSchema,
            RecursiveValueSchema
        )
    ] )
)

export const TMContentSchema = TMContentBaseSchema
    .extend( {} )
    .catchall( z.union( [ RecursiveValueSchema, StringNoNSchema ] ) )

export type TMContent = z.input<typeof TMContentSchema>
