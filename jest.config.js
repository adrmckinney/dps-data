const config = {
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};

export default config;

// import type { Config } from 'jest';
// import { pathsToModuleNameMapper } from 'ts-jest';
// import { compilerOptions } from './tsconfig.json';

// const config: Config = {
//     preset: 'ts-jest/presets/default-esm', // 👈 ESM support
//     testEnvironment: 'node',
//     extensionsToTreatAsEsm: ['.ts'],
//     moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
//         prefix: '<rootDir>/',
//     }),
//     transform: {
//         '^.+\\.ts$': ['ts-jest', { useESM: true }],
//     },
//     globals: {},
// };

// export default config;
