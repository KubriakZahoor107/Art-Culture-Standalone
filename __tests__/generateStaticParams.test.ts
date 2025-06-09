/** @jest-environment node */
import { jest } from '@jest/globals'
import { generateStaticParams } from '../src/app/news/[id]/page'
import { newsList } from '../src/data/news'

describe('generateStaticParams', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv, NODE_ENV: 'production', NEXT_PUBLIC_API_BASE_URL: 'http://localhost:3000' }
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => newsList }) as any
  })

  afterEach(() => {
    process.env = originalEnv
    ;(global.fetch as unknown as jest.Mock).mockReset()
  })

  test('returns params when API_BASE_URL is provided', async () => {
    const params = await generateStaticParams()
    expect(params.length).toBeGreaterThan(0)
    expect(params[0]).toHaveProperty('id')
    expect(global.fetch).toHaveBeenCalled()
  })
})
