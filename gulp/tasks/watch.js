var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function() {
    gulp.watch(config.postcss.src, ['postcss']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch(config.jade.src, ['jade']);
    gulp.watch(config.production.jsSrc, ['jshint']);
});
