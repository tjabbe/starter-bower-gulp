var gulp        = require('gulp'),
    config      = require('../config').views,
    browserSync = require('browser-sync').create();

gulp.task('views', function(){
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
});