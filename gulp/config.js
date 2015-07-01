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

    // CSS Preprocessor
    postcss: {
        src: src + "/css/**/*.styl",
        dest: dest
    },

    // HTML Preprocessor
    jade: {
        src: src + "/**/*.jade",
        dest: dest
    },

    // Browserify Settings
    browserify: {
        bundleConfigs: [{
            entries: src + '/javascript/main.js',
            dest: dest,
            outputName: 'main.js',
            external: ['jquery', 'underscore']
        }]
    }
};
