var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config').jshint;

gulp.task('jshint', function() {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
