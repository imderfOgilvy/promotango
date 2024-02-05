module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',

  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
