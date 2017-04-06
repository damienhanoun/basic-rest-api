var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var del = require('del');
var jasmine = require('gulp-jasmine');

var typescriptConfiguration = {
  "noImplicitAny": false,
  "noEmitOnError": true,
  "target": "es5",
  "module":"none",
  "lib":["dom", "es5", "es2015.promise"]
};

gulp.task('clean', function () {
  return del("dist");
});

gulp.task('compileTs', ['clean'], function () {
  return gulp.src(['src/**/*.ts'])
    .pipe(ts(typescriptConfiguration))
    .js
    .pipe(gulp.dest('build'));
});

gulp.task('minifyJs', ['compileTs'], function () {
  return gulp.src(['build/**/*.js', '!build/main.js'])
    .pipe(concat('basic-rest-api.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('copyFiles', ['minifyJs'], function () {
    return gulp.src(['src/index.html', 'build/**/*.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyFiles'], function () {
  return del("build");
});
