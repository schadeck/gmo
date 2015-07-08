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
        dest: dest + '/css'
    },

    // Images
    images: {
        src: src + '/img/*',
        dest: dest + '/img'
    },

    // HTML
    jade: {
        src: src + '/*.jade',
        dest: dest
    },

    // IconFont

    iconFonts: {
        name: 'iconfonts',
        src: src + '/img/icons/*.svg',
        dest: dest + '/fonts',
        stylDest: src + '/css/partials',
        template: './gulp/tasks/iconFont/template.styl.swig',
        stylOutputName: '_icons.styl',
        fontPath: 'fonts',
        className: 'icon',
        options: {
            fontName: 'iconfonts',
            appendCodepoints: true,
            normalize: false
        }
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

    // Wiredep
    wiredep: {
        src: src + '/index.jade',
        dest: src
    },


    // Vendor
    vendor: {
        src: src + '/js/vendor/*.js',
        dest: dest + '/js/vendor'
    },
    jshint: {
        src: ['./src/js/**/*.js', '!./src/js/vendor/**/*.js']
    },

    // Production
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        cssDest: dest + '/css',
        jsDest: dest + '/js'
    }
};
