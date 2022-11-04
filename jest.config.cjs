// export default {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     testMatch: ['<rootDir>/**/*.spec.tsx'],
//     testPathIgnorePatterns: ['/node_modules/'],
//     coverageDirectory: './coverage',
//     coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types'],
//     reporters: ['default', 'jest-junit'],
//     globals: { 'ts-jest': { diagnostics: false } },
//     transform: { "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"},
//   };
  

//   module.exports = {
//     testPathIgnorePatterns: ["/node_modules", "/storybook"],
//     setupFilesAfterEnv: [
//         "<rootDir>/src/tests/setupTests.ts"
//     ],
//     transform: {
//         "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
//     },
//     testEnvironment: "jsdom"
// }

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.spec.tsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types'],
    reporters: ['default', 'jest-junit'],
    globals: { 'ts-jest': { diagnostics: false } },
    transform: { },
    setupFilesAfterEnv: [
                "<rootDir>/src/tests/setupTests.ts"
            ],
            testEnvironment: "jsdom"
  };
  
