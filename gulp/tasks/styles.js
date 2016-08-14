var gulp          = require('gulp'),
    config        = require('../config').styles,
    gutil         = require('gulp-util'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    cmq           = require('gulp-combine-mq'),
    csso          = require('gulp-csso'),
    browserSync   = require('browser-sync').create(),
    sourcemaps    = require('gulp-sourcemaps'),
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    options       = require('minimist')(process.argv.slice(2));

gulp.task('styles', function(){
  return gulp.src(config.src)
    .pipe(options.production ? gutil.noop() : sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError('SASS Error : <%= error.message %>')
    }))
    .pipe(sass(config.sassOpts))
    .pipe(autoprefixer(config.autoprefixerOpts))
    .pipe(options.production ? gutil.noop() : sourcemaps.write())
    .pipe(options.production ? cmq() : gutil.noop())
    .pipe(options.production ? csso() : gutil.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});