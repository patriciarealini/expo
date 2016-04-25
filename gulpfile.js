const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpSass = require("gulp-sass")

const HTMLS = ["ui/index.html"]
const STYLES = [
  "node_modules/normalize.css/normalize.css",
  "ui/index.scss"
]
const STYLE = "index.css"
const DESTINATION = "tmp/"

gulp.task("styles", () => {
  return gulp.src(STYLES)
  .pipe(gulpConcat(STYLE))
  .pipe(gulpSass().on("error", gulpSass.logError))
  .pipe(gulp.dest(DESTINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
  .pipe(gulp.dest(DESTINATION))
})

gulp.task("watch", ["styles", "htmls"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
})

gulp.task("default", ["styles", "htmls"])
