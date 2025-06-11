/** @jest-environment node */
import page from '@/app/news/[id]/page'
import { getApiBaseUrl } from '@/utils/getApiBaseUrl'

test('alias import for page works', () => {
  expect(typeof page).toBe('function')
})

test('alias import for util works', () => {
  expect(typeof getApiBaseUrl).toBe('function')
})
