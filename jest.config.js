// const esModules = ['d3', 'd3-array'].join('|');


module.exports = {
  // Jest configuration options...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    'd3': 'jest-transform-stub',
  },
  // transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  maxWorkers: 1,
  testEnvironment: 'jest-environment-jsdom',
};