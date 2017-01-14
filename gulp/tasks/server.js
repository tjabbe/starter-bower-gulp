var gulp          = require('gulp'),
    config        = require('../config'),
    browserSync   = require('browser-sync').create(),
    reload        = browserSync.reload;

gulp.task('server', ['styles', 'views', 'jshint', 'scripts:vendors', 'scripts:app', 'scriptsCorpo:app', 'images'], function(){
  browserSync.init(config.browserSync);
  gulp.watch(config.styles.watchSrc, ['styles', reload]);
  gulp.watch(config.views.watchSrc, ['views', reload]);
  gulp.watch(config.images.src, ['images', reload]);
  gulp.watch(config.sprite.src, ['sprite', reload]);
  gulp.watch(config.scripts.src, ['jshint', reload]);
  gulp.watch(config.scripts.vendorSrc, ['scripts:vendors', reload]);
  gulp.watch(config.scripts.src, ['scripts:app', reload]);
  // -- Begin corpo
  gulp.watch(config.scriptsCorpo.src, ['jshint', reload]);
  gulp.watch(config.scriptsCorpo.src, ['scriptsCorpo:app', reload]);
  // -- End corpo
  gulp.watch(config.icons.src, ['icons', reload]);
});