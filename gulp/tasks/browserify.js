var gulp = require('gulp'),
    _ = require('lodash'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    mergeStream = require('merge-stream'),
    source = require('vinyl-source-stream'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config').browserify;

var browserifyTask = function(devMode) {
    var browserifyThis = function(bundleConfig) {
        if (devMode) {
            _.extend(bundleConfig, watchify.args, {
                debug: true
            });
            bundleConfig = _.omit(bundleConfig, ['external', 'require']);
        }
        var b = browserify(bundleConfig);
        var bundle = function() {
            bundleLogger.start(bundleConfig.outputName);
            return b
                .bundle()
                .on('error', handleErrors)
                .pipe(source(bundleConfig.outputName))
                .pipe(gulp.dest(bundleConfig.dest))
                .pipe(browserSync.reload({
                    stream: true
                }));
        };
        if (devMode) {
            b = watchify(b);
            b.on('update', bundle);
            bundleLogger.watch(bundleConfig.outputName);
        } else {
            if (bundleConfig.require) b.require(bundleConfig.require);
            if (bundleConfig.external) b.external(bundleConfig.external);
        }
        return bundle();
    };
    return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));
};
gulp.task('browserify', function() {
    return browserifyTask()
});

module.exports = browserifyTask;
