var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function() {
    // gulp.watch(config.sass.src,   ['sass']);
    // gulp.watch(config.images.src, ['images']);
    // gulp.watch(config.markup.src, ['markup']);
    // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
