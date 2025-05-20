import { MergeSchema } from '@/schemas/actions/merge.schema'
import { z } from 'zod'

export const TMergeSchema = z.object( {
    merge: MergeSchema.default( {} )
} )

export type TMerge = z.input<typeof TMergeSchema>
