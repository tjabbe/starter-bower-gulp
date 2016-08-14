var gulp      = require('gulp'),
    root      = require('../config').copy,
    fonts     = require('../config').fonts;

gulp.task('copy:root', function(){
  return gulp.src(root.src, {dot: true})
    .pipe(gulp.dest(root.dest))
});

gulp.task('copy:fonts', function(){
  return gulp.src(fonts.src, {dot: true})
    .pipe(gulp.dest(fonts.dest))
});