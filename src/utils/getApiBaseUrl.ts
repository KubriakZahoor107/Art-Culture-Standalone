import { env } from '@/utils/env'

export function getApiBaseUrl(): string {
  const fallback = 'http://localhost:3000'
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL || fallback
  if (
    process.env.NODE_ENV === 'production' &&
    !env.NEXT_PUBLIC_API_BASE_URL
  ) {
    throw new Error('Missing NEXT_PUBLIC_API_BASE_URL')
  }
  return baseUrl
}
