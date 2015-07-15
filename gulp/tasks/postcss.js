var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
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
    lost = require('lost'),
    doiuse = require('doiuse');

var processors = [
    autoprefixer({
        browsers: ['> 1%', 'ie >= 9']
    }),
    doiuse({
        browsers: ['ie >= 9'],
        onFeatureUsage: function(usageInfo) {
            console.log(usageInfo.message);
        }
    }),
    mqpacker,
    csswring,
    lost
];

gulp.task('postcss', function() {
    return gulp.src(config.src)
        .pipe(plumber())
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
