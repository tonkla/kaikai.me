module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./src/*.svelte', './src/**/*.svelte'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
    process.env.NODE_ENV === 'production' ? require('cssnano')({ preset: 'default' }) : null,
  ],
}
