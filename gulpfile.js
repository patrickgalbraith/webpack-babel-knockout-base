var gulp          = require('gulp');
var clean         = require('gulp-clean');
var sourcemaps    = require('gulp-sourcemaps');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');

var webpackConfig = require('./webpack.config.js');

gulp.task('clean', function() {
  return gulp.src('./dist/*', { read: false })
    .pipe(clean());
});

gulp.task('build', ['clean'], function() {
  webpackConfig.devtool = '#source-map';
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())

  return gulp.src('./src/entry.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['clean'], function() {
  return gulp.src('./src/entry.js')
    .pipe(webpackStream(
      Object.assign({}, webpackConfig, {
        watch: true
      })
    ))
    .pipe(gulp.dest('.'));
});