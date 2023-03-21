/* eslint-disable quote-props */
module.exports = {
  "root": true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'react/self-closing-comp': [
      'error', {
        component: true,
        html: true
      }
    ]
  }
};

