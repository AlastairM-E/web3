module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
