var reactify = require('reactify');

// Browserify is a tool for taking your CommonJS-style Javascript code and packaging it for use in the browser.
module.exports = {
    dist: {
        options: {
            banner: '/*! @generated */',
            transform: [reactify],
            extensions: ['.jsx'],
        },
        files: {
            '<%= cfg.static %>/scripts/app.js': '<%= cfg.assets %>/scripts/main.jsx'
        }
    }
};
