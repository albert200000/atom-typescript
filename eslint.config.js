import path from 'path'
import { fileURLToPath } from 'url'
import globals from 'globals'
import eslintJs from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import reactEslintPlugin from 'eslint-plugin-react'
import mochaPlugin from 'eslint-plugin-mocha'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: ['node_modules/', 'dist/']
  },
  eslintJs.configs.recommended,
  mochaPlugin.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      react: reactEslintPlugin
    },
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: '2020',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.worker,
        atom: 'readonly',
        JSX: 'readonly',
        Grammar: 'readonly',
        protocol: 'readonly',
        ElementExp: 'readonly',
        DiagnosticMessage: 'readonly',
        NodeJS: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...tsEslintPlugin.configs['recommended'].rules,
      ...reactEslintPlugin.configs['recommended'].rules,

      // Custom rule overrides for plugins
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrorsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'react/react-in-jsx-scope': 'off', // Don't require React import
      'react/prop-types': 'off', // If you are using TypeScript, you don't need prop-types
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'react/no-unknown-property': 'off',
      'react/no-string-refs': 'off'
    }
  }
]
