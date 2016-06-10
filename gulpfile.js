var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
 
gulp.task('javascript', function() {
  return gulp.src('public/app/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['javascript','css'])
