var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function() {
    gulp.watch(config.postcss.src, ['postcss']);
    gulp.watch(config.jade.src, ['jade']);
});
