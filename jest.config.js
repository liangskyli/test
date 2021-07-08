module.exports = {
  testURL: 'http://localhost:7001',
  moduleNameMapper(memo) {
    return {
      ...memo,
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@@/(.*)$': '<rootDir>/src/.umi/$1',
    };
  },
  transform(memo) {
    return {
      ...memo,
      '^.+\\.(js|jsx|ts|tsx)$': require.resolve('./javascript'),
    };
  },
};
