var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var path = require('path');
var clean = require('gulp-clean');

// .src === our source files to process
// .pipe === processing these files into different gulp tasks, output directories, etc.

var paths = {
    es6: ['src/**/*.js'],
    es5: 'dist',

    sourceRoot: path.join(__dirname, 'es6'),
};

gulp.task('clean', function () {
	return gulp.src(paths.es5, {read: false})
		.pipe(clean({force: true}));
});

gulp.task('babel', ['clean'], function () {
  return gulp.src(paths.es6)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
    .pipe(gulp.dest(paths.es5));
});

gulp.task('watch', function() {
    gulp.watch(paths.es6, ['babel']);
});

gulp.task('default', ['watch']);