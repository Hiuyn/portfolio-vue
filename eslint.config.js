import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  // 1. Thay thế .eslintignore (Phải để object này ở đầu tiên)
  {
    ignores: ['**/dist/**', 'node_modules/**', '**/temp/**']
  },

  // 2. Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],

  // 3. Cấu hình Parser cho Vue và TS
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    }
  },

  // 4. Plugins & Rules
  {
    plugins: {
      prettier: prettier,
      '@typescript-eslint': tseslint.plugin,
      vue: vue
    },
    rules: {
      // Vue
      'vue/multi-word-component-names': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Prettier
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none'
        }
      ]
    }
  }
]
