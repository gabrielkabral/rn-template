module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', "prettier/@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    jest: true,
    'jest/globals': true
  },
  plugins: ['@typescript-eslint']
}
