import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends('next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        JSX: 'readonly',
        React: 'readonly',
      },
      parser: tsParser,
    },
    rules: {
      'import/no-anonymous-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/self-closing-comp': 'error',
      'prettier/prettier': 'error',
      'object-shorthand': 'error',
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: 'dayjs',
              message: "Lütfen dayjs'i '@/utils/dayjs' üzerinden import edin.",
            },
          ],
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'next/*',
              group: 'external',
              position: 'before',
            },
          ],
          groups: ['builtin', 'external', 'type', 'object', 'internal', 'parent', 'sibling', 'index'],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
];

export default config;
