var gutil = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    startTime;

module.exports = {
    start: function(filepath) {
        startTime = process.hrtime();
        gutil.log('Bundling', gutil.colors.green(filepath) + '...');
    },
    watch: function(bundleName) {
        gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
    },
    end: function(filepath) {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
    }
};
