import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['internal', 'unknown'], 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/constants/**/*', group: 'parent', position: 'before' },
            { pattern: '@/components/atoms/**/*', group: 'parent', position: 'before' },
            { pattern: '@/components/molecules/**/*', group: 'parent', position: 'before' },
            { pattern: '@/components/organisms/**/*', group: 'parent', position: 'before' },
            { pattern: '@/components/templates/**/*', group: 'parent', position: 'before' },
            { pattern: '@/components/pages/**/*', group: 'parent', position: 'before' },
            { pattern: '@/hooks/**/*', group: 'parent', position: 'before' },
            { pattern: '@/services/**/*', group: 'parent', position: 'before' },
            { pattern: '@/helpers/**/*', group: 'parent', position: 'before' },
            { pattern: '@/types/**/*', group: 'parent', position: 'before' },
            { pattern: './**/*', group: 'index' },
          ],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: true,
        },
      ],
    },
  },
];

export default eslintConfig;
