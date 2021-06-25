/* eslint-disable */
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    require('@umijs/babel-preset-umi/node')('', {
      react: {
        runtime: 'automatic',
      },
    }),
  ],
  babelrc: false,
  configFile: false,
});
