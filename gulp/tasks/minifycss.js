var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    minifyCSS = require('gulp-minify-css'),
    size = require('gulp-filesize'),
    rename = require('gulp-rename'),
    config = require('../config').production;

gulp.task('minifycss', ['postcss'], function() {
    return gulp.src(config.cssSrc)
        .pipe(plumber())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifyCSS({
            keepBreaks: false
        }))
        .pipe(gulp.dest(config.cssDest))
        .pipe(size());
});
