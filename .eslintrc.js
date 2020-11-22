module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native-a11y/all',
    'plugin:prettier/recommended'
  ],
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
  plugins: ['@typescript-eslint',
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    'prettier',
    'react-hooks',
    'jest',
    'eslint-comments'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // 'react/react-in-jsx-scope': "off",
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-unused-vars': 'off', // You must disable the base rule as it can report incorrect errors
  },
}
