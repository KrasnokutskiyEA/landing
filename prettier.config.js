module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx'],

  /* rules */
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: 'none'
}
