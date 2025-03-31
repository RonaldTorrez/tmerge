import { StringNoNSchema } from '@/schemas/utils/string'
import { z } from 'zod'

const TMContentBaseSchema = z.object( {
    _name: StringNoNSchema.optional()
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
