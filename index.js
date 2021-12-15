module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: 'readonly'
  },
  ignorePatterns: ['dist/*', 'scripts/*', 'old_*'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'simple-import-sort',
    'babel',
    'only-warn',
    'unused-imports',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      version: 'latest'
    }
  },
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'cypress/no-unnecessary-waiting': 'off',
    'react/prop-types': ['off'], // could eventually support (https://reactjs.org/docs/typechecking-with-proptypes.html)
    semi: 'off', // require semicolons
    '@typescript-eslint/semi': ['warn', 'always'], // require semicolons
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['warn', 'never'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'simple-import-sort/imports': ['warn', {
      groups: [
        // Side effect imports.
        ['^\\u0000'],
        // Packages.
        // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        ['^@?\\w'],
        // Absolute imports and other imports such as Vue-style `@/foo`.
        // Anything that does not start with a dot.
        ['^[^.]'],
        // Relative imports. In different directory
        ['^\\.\\.'],
        // Relative imports in same directory
        ['^\\.']
      ]
    }],
    'simple-import-sort/exports': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['warn', {
      allowShortCircuit: true
    }],

    // check https://www.npmjs.com/package/eslint-plugin-unused-imports for more info
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'no-debugger': 'warn',
    // not necessary when using let/const https://palantir.github.io/tslint/rules/no-use-before-declare/
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-trailing-spaces': 'warn',
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'semi', // 'none' or 'semi' or 'comma'
        requireLast: true
      },
      singleline: {
        delimiter: 'semi', // 'semi' or 'comma'
        requireLast: false
      }
    }],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
      enums: 'never',
      generics: 'never',
      tuples: 'never'
    }]
  },
  overrides: [{
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser',
    rules: {
      'no-undef': 'off'
    }
  }]
};
