import { Merge, MergeSchema } from '@/schemas/actions/merge.schema'

export default function merge(
    parameters: Merge
): void {
    const validated = MergeSchema.parse( parameters )

    console.log( validated )
}
