import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '@primeng/(.*)': '<rootDir>/node_modules/@primeng/themes',
  },
};

export default config;
