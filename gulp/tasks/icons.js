var gulp          = require('gulp'),
    config        = require('../config').icons,
    plumber       = require('gulp-plumber'),
    svgSprite     = require('gulp-svg-sprite'),
    notify        = require('gulp-notify'),
    runSequence   = require('run-sequence');

gulp.task('icons', function(){
  return gulp.src(config.src)
  	.pipe(plumber({
      errorHandler: notify.onError('Icons Error : <%= error.message %>')
    }))
    .pipe(svgSprite(config.spriteConfig))
    .pipe(gulp.dest(config.dest))
});