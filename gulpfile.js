var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var reactify = require('reactify');

gulp.task('browserify', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src('src/app.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch('src/**.*', ['default']);
});

gulp.task('default', ['browserify']);
