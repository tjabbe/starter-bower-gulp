var gulp          = require('gulp'),
    config        = require('../config').sprite,
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    imagemin      = require('gulp-imagemin'),
    imageminCfg   = require('../config').images,
    pngquant      = require('imagemin-pngquant'),
    sprite        = require('gulp.spritesmith');

gulp.task('sprite', function(){
  config.opts.use = [pngquant()];

  var spriteData = gulp.src(config.src)
    .pipe(plumber({
      errorHandler: notify.onError('Sprite Error : <%= error.message %>')
    }))
    .pipe(sprite(config.opts));

  // Export sprite
  var imgStream = spriteData.img
    .pipe(imagemin(imageminCfg.opts))
    .pipe(gulp.dest(config.destImg));

  // Export sprite scss config
  var cssStream = spriteData.css
    .pipe(gulp.dest(config.destCss));
});