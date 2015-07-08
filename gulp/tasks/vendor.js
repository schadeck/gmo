var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    size = require('gulp-filesize'),
    config = require('../config').vendor;

gulp.task('vendor', function() {
    return gulp.src(config.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});