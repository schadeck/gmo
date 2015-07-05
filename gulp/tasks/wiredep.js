var gulp = require('gulp'),
    config = require('../config').wiredep;

// inject bower components into index.html
gulp.task('wiredep', function() {

    var wiredep = require('wiredep').stream;

    return gulp.src(config.src)
        .pipe(wiredep({
            directory: './bower_components'
        }))
        .pipe(gulp.dest(config.dest));
});