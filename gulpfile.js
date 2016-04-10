'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var mainBowerFiles = require('main-bower-files');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "starter.dev"
  });
});

gulp.task('sass', function () {
  gulp.src('sass/main.scss')
    .pipe(plumber({
         errorHandler: function (error) {
           console.log(error.message);
    }}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js_app', function () {
   return gulp.src('js/**/*.js')
      .pipe(plumber({
         errorHandler: function (error) {
           console.log(error.message);
      }}))
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('build/app.js'))
      .pipe(uglify())
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('js_libs', function () {
   return gulp.src(mainBowerFiles())
      .pipe(concat('build/vendors.js'))
      .pipe(uglify())
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('views', function() {
  browserSync.reload();
});

gulp.task('default', ['browser-sync', 'js_libs', 'js_app', 'sass'], function() {
  gulp.watch('bower_component/', ['js_libs']);
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['js_app']);
  gulp.watch('*.html', ['views']);
});