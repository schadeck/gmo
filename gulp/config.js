var historyApiFallback = require('connect-history-api-fallback');

var dest = './build',
    src = './src';

module.exports = {
    // Serve build folder.
    browserSync: {
        server: {
            baseDir: dest,
            middleware: [historyApiFallback()]
        },
        notify: false
    },

    // CSS
    postcss: {
        src: src + '/css/*.styl',
        dest: dest + '/css'
    },

    // Images
    images: {
        src: src + '/img/*',
        allsrc: src + '/css/**/*.styl',
        dest: dest + '/img'
    },

    // HTML
    jade: {
        src: src + '/*.jade',
        dest: dest
    },

    // Browserify Settings
    browserify: {
        debug: true,
        bundleConfigs: [{
            entries: src + '/js/app.js',
            dest: dest + '/js',
            outputName: 'app.js',
            external: ['jquery']
        }]
    },

    // Vendor
    vendor: {
        src: src + '/js/vendor/*.js',
        dest: dest + '/js/vendor'
    },

    // Production
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        cssDest: dest + '/css',
        jsDest: dest + '/js'
    }
};
