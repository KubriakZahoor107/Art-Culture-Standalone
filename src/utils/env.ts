import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().optional(),
  API_BASE_URL: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXTAUTH_SECRET: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  TOKEN: z.string().optional(),
})

export const env = envSchema.parse(process.env)
