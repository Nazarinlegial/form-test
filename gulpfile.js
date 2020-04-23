const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      rename = require('gulp-rename');

 gulp.task('sass', function(){
   return  gulp.src('./app/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest("./app/css"));
 });      
 
 