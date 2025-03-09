import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js and TypeScript support
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier integration
  {
    name: 'prettier',
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules, // Apply Prettier rules
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },
];

export default eslintConfig;
