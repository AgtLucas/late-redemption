var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src('app.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch('app.js', ['default']);
});

gulp.task('default', ['browserify']);
