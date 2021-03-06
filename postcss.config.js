const production = !process.env.ROLLUP_WATCH;
const purgecss = require('@fullhuman/postcss-purgecss');
let tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-import')(),
        tailwindcss('tailwind.config.js'),
        require('autoprefixer'),
        // Only purge css on production
        production &&
        purgecss({
            content: ['./**/*.html', './**/*.svelte'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
};