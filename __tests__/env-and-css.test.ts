/** @jest-environment node */
import { getApiBaseUrl } from '../src/utils/getApiBaseUrl'

describe('getApiBaseUrl', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  test('returns base url when NEXT_PUBLIC_API_BASE_URL is set', () => {
    process.env.NEXT_PUBLIC_API_BASE_URL = 'https://api.example.com'
    expect(getApiBaseUrl()).toBe('https://api.example.com')
  })

  test('falls back to localhost when NEXT_PUBLIC_API_BASE_URL is missing', () => {
    delete process.env.NEXT_PUBLIC_API_BASE_URL
    process.env.NODE_ENV = 'production'
    expect(getApiBaseUrl()).toBe('http://localhost:3000')
  })
})
