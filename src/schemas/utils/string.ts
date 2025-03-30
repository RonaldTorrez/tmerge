import { z } from 'zod'

// ============================
// String Schema
// ============================
export const StringSchema = z.string().trim()

export type String = z.infer<typeof StringSchema>

// ============================
// String Array Schema
// ============================
export const StringArraySchema = z.array( StringSchema )

export type StringArray = z.infer<typeof StringArraySchema>

// ============================
// String Array Non-Empty Schema
// ============================
export const StringArrayNoNSchema = StringArraySchema.nonempty()

export type StringArrayNoN = z.infer<typeof StringArrayNoNSchema>

// ============================
// String Non-Empty Schema
// ============================
export const StringNoNSchema = StringSchema.nonempty()

export type StringNoN = z.infer<typeof StringNoNSchema>

// ============================
// String Non-Empty Array Schema
// ============================
export const StringNoNArraySchema = z.array( StringNoNSchema )

export type StringNoNArray = z.infer<typeof StringNoNArraySchema>

// ============================
// String Non-Empty Array Non-Empty Schema
// ============================
export const StringNoNArrayNoNSchema = StringNoNArraySchema.nonempty()

export type StringNoNArrayNoN = z.infer<typeof StringNoNArrayNoNSchema>
