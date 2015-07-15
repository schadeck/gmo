var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    size = require('gulp-filesize'),
    config = require('../config').vendor;

gulp.task('vendor', function() {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});
