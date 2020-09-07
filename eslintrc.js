module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended',
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
        project: './tsconfig.json',
      },
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/prop-types': 0,
        'max-len': [2, 120, 2, { ignoreUrls: true, ignorePattern: '\\s+it\\(' }],
        'spaced-comment': 0,
        'object-curly-newline': 0,
        'no-plusplus': 0,
        '@typescript-eslint/indent': 0,
        'consistent-return': 0,
        'max-len': 0,
        "@typescript-eslint/unbound-method": [
          "error",
          {
            "ignoreStatic": true
          }
        ],
        "require-yield": 0,
        "react/jsx-curly-newline": 0,
        "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}],
        "react/jsx-one-expression-per-line": 0,
        'default-case': ["error", { "commentPattern": "^skip\\sdefault" }],
        // 'import/prefer-default-export': 0,
        // 'import/no-extraneous-dependencies': ['error', { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parser: 'babel-eslint',
      extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:redux-saga/recommended',
        'plugin:css-modules/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'max-len': [2, 120, 2, { ignoreUrls: true, ignorePattern: '\\s+it\\(' }],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'react-hooks/rules-of-hooks': 'error',
        semi: [2, 'always'],
        'comma-dangle': [2, 'always-multiline'],
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['redux-saga', 'react-hooks', 'css-modules'],
      settings: {
        'css-modules': {
          basePath: './src/*',
        },
      },
    },
  ],
};
