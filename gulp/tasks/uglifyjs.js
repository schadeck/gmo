var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    size = require('gulp-filesize'),
    // rename = require('gulp-rename'),
    config = require('../config').production;

gulp.task('uglifyjs', ['browserify'], function() {
    return gulp.src(config.jsSrc)
        .pipe(plumber())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsDest))
        .pipe(size());
});
