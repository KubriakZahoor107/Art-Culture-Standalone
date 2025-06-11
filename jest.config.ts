import 'ts-node/register'
import type { Config } from 'jest'

const config: Config = {
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
    setupFiles: ['<rootDir>/jest.setup.cjs'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|svg|ttf|webp)$': '<rootDir>/__mocks__/fileMock.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
    transformIgnorePatterns: ['/node_modules/'],
}

export default config
