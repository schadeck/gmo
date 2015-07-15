var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function() {
    gulp.watch(config.postcss.allsrc, ['postcss']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch(config.jade.allsrc, ['jade']);
    gulp.watch(config.jshint.src, ['jshint']);
});