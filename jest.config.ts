import type { Config } from 'jest'

const config: Config = {
  // Використовує Babel для трансформації .ts/.tsx/.js/.jsx
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },

  // Підтримка ESM для цих розширень (без явного ".js")
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],

  // Polyfill для TextEncoder/TextDecoder
  setupFiles: ['<rootDir>/jest.setup.cjs'],

  testEnvironment: 'jsdom',

  // Мапінг псевдоніма @/ до папки src/
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg|ttf|webp)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Розширення файлів, які обробляє Jest
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Шляхи, які ігноруються при тестуванні
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],

  // Ігнорувати перетворення у node_modules
  transformIgnorePatterns: ['/node_modules/'],
}

export default config
