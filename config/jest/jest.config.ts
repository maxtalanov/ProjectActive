/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    testEnvironment: 'jsdom',
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[t,j]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
    },
};
