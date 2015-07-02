var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    stylus = require('gulp-stylus'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config').postcss;

// PostCSS
var postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    lost = require('lost');

var processors = [
    autoprefixer({
        browsers: ['last 5 version']
    }),
    mqpacker,
    csswring,
    lost
];

gulp.task('postcss', function() {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(postcss(processors))
        .on('error', handleErrors)
        .pipe(sourcemaps.write('/sourcemaps'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
