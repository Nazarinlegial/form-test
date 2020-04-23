const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  rimraf = require("rimraf"),
  sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp
    .src("./source/sass/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("./app/css"));
});
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      port: 9000,
      baseDir: "./app",
    },
  });

  gulp.watch("./app/**/*").on("change", browserSync.reload);
});

gulp.task("js:compile", function () {
  return gulp
    .src(["source/js/main.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./app/js"));
});
gulp.task("clean:css", function del(cb) {
  return rimraf("./app/css", cb);
});
gulp.task("clean:js", function del(cb) {
  return rimraf("./app/js", cb);
});
gulp.task('clean', gulp.parallel('clean:css','clean:js'));

gulp.task("watch", function () {
  gulp.watch("source/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("source/js/**/*.js", gulp.series("js:compile"));
});

gulp.task('default', gulp.series(
  'clean', 
  gulp.parallel('sass','js:compile'),
  gulp.parallel('watch', 'browser-sync')
    )
);