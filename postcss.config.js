const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
        require('postcss-mixins'),
        require('postcss-conditionals'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer')
    ],
};