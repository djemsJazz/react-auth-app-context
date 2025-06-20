import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react';

const isProd = process.env.NODE_ENV === 'PROD';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: eslintPluginReact,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": 0,
      "react-hooks/exhaustive-deps": 2,
      "react/jsx-no-constructed-context-values": 2,
      "no-unexpected-multiline": 2,
      "no-multiple-empty-lines": 2,
      "eol-last": ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }]	// Warns on most, but allows warn and error
    },
  },
)
