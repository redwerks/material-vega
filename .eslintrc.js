module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@redwerks/eslint-config',
    '@redwerks/eslint-config-typescript',
    '@redwerks/eslint-config-react',
    '@redwerks/eslint-config-jest/tests-folder'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
