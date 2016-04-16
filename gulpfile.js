var gulp = require('gulp');
var gulpConcat = require('gulpConcat');

gulp.task("styles", function() {
  return gulp.src(STYLES)
  .pipe(gulpConcat(STYLE))
  .pipe(gulp.dest(DESTINATION))
});

gulp.task('default', function() {

});
