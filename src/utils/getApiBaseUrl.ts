export function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL
  if (url) return url
  // у test | dev режимі фолбек
  return 'http://localhost:3000'
}
