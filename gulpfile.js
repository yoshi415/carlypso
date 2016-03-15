var gulp = require('gulp');
var sync = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');

var paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,styl,html}', 'client/styles/**/*.styl'],
  js: 'client/app/**/*.js',
  styl: ['client/app/**/*.styl', 'client/style/**/*.styl'],
  toCopy: ['client/index.html'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist'
};

gulp.task('build', function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 9001,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('copy', function() {
  return gulp.src(paths.toCopy, {base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});