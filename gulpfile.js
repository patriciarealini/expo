const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpSass = require('gulp-sass');

const HTMLS = ["ui/index.html"];
const STYLES = [
  "node_modules/normalize.css/normalize.css",
  "ui/index.scss",
  "ui/Header/header.scss",
  "ui/Modal/modal.scss",
  "ui/Container/container.scss",
  "ui/Tickets/tickets.scss"
];
const STYLE = "index.css";
const DESTINATION = "tmp/";

gulp.task("styles", function() {
  return gulp.src(STYLES)
  .pipe(gulpConcat(STYLE))
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(gulp.dest(DESTINATION))
});

gulp.task("htmls", function() {
  return gulp.src(HTMLS)
  .pipe(gulp.dest(DESTINATION))
});

gulp.task('default', ["styles", "htmls"]);
