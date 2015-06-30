var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('../config').browserSync;

gulp.task('browserSync', function() {
    browserSync.init(null, config);
});