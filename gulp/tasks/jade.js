var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config').jade;


gulp.task('jade', function() {
    return gulp.src(config.src)
        .pipe(jade())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
