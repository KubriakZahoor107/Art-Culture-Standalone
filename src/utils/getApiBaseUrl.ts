export function getApiBaseUrl(): string {
  const fallback = 'http://localhost:3000'
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || fallback
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL must be defined in production')
  }
  return baseUrl
}
