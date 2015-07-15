var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    pngquant = require('imagemin-pngquant'),
    config = require('../config').images;

gulp.task('images', function() {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(changed(config.dest))
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                removeViewBox: true
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
