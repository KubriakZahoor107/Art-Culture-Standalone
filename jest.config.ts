import type { Config } from 'jest'

const config: Config = {
    // Підключення ts-jest
    preset: 'ts-jest',

    // Емуляція середовища браузера для SSR (jsdom)
    testEnvironment: 'jsdom',

    // Setup files for custom matchers and other utilities
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],

    // Мапінг псевдоніма @/
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },

    // Які розширення обробляти
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    // Як обробляти файли
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.mjs$': 'babel-jest',
    },

    // Які шляхи ігнорувати при тестах
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],

    // Ігнорувати трансформацію цих модулів
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}

export default config
