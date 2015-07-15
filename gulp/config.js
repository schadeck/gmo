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
        allsrc: src + '/css/**/*.styl',
        dest: dest + '/library/css'
    },

    // Images
    images: {
        src: src + '/img/*',
        dest: dest + '/library/img'
    },

    // HTML
    jade: {
        src: src + '/*.jade',
        allsrc: src + '/**/*.jade',
        dest: dest
    },

    // IconFont

    fonts: {
        src: src + '/fonts/*',
        dest: dest + '/library/fonts'
    },

    // Browserify Settings
    browserify: {
        debug: true,
        bundleConfigs: [{
            entries: src + '/js/app.js',
            dest: dest + '/library/js',
            outputName: 'app.js'
        }]
    },

    // Wiredep
    wiredep: {
        src: src + '/index.jade',
        dest: src
    },


    // Vendor
    vendor: {
        src: src + '/js/vendor/*.js',
        dest: dest + '/library/js/vendor'
    },

    // JsHint
    jshint: {
        src: ['./src/js/**/*.js', /*'./build/js/*.js',*/ '!./src/js/vendor/**/*.js']
    },

    // Production
    production: {
        cssSrc: dest + '/library/css/*.css',
        jsSrc: dest + '/library/js/*.js',
        cssDest: dest + '/library/css',
        jsDest: dest + '/library/js'
    }
};
