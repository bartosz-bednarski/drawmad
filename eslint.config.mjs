import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['.prettierrc.cjs'],
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {globals: globals.browser},
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
