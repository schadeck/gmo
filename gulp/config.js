var dest = './build',
    src = './src';

module.exports = {
    // Serve build folder.
    browserSync: {
        server: {
            baseDir: dest
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
            entries: src + '/js/main.js',
            dest: dest + '/js',
            outputName: 'main.js',
            external: ['jquery', 'underscore']
        }]
    },

    // Production
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        cssDest: dest + '/css',
        jsDest: dest + '/js'
    }
};
