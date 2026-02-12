import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';

export default [
    ...eslintPluginAstro.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".astro"]
            }
        }
    },

    {
        ignores: ["dist/", ".astro/", "node_modules/", ".vercel/", ".env", ".env.*"]
    }
];