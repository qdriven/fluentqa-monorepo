import { beforeAll, vi } from 'vitest'

beforeAll(() => {
  vi.stubGlobal('fetch',"fetch")
})
