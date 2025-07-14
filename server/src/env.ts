import {z} from "zod"

const envSchema = z.object({
    PORT: z.coerce.number().default(3333), //converte para numero o valor
    DATABASE_URL: z.string().url().startsWith("postgresql://"), //validar que DATABASE_URL existe, é uma url e começa com postgresql://
    GEMINI_API_KEY: z.string(), //Key da Gemini
})

export const env = envSchema.parse(process.env);