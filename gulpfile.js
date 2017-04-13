var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var del = require('del');
var jasmine = require('gulp-jasmine');
var requirejsOptimize = require('gulp-requirejs-optimize');

var typescriptConfiguration = {
  "noImplicitAny": false,
  "noEmitOnError": true,
  "target": "es5",
  "module":"amd",
  "lib":["dom", "es5", "es2015.promise"]
};

gulp.task('cleanDist', function () {
  return del("dist");
});

gulp.task('compileTs', ['cleanDist'], function () {
  return gulp.src(['src/**/*.ts', 'spec/**/*Test.ts'])
    .pipe(ts(typescriptConfiguration))
    .js
    .pipe(gulp.dest('build'));
});

gulp.task('copyTest', ['compileTs'], function () {
    return gulp.src(['build/**/*Test.js'])
        .pipe(gulp.dest('spec'));
});

gulp.task('copyFiles', ['copyTest'], function () {
    return gulp.src(['build/**/*.js', '!build/**/*Test.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyFiles'], function () {
  return del("build");
});

gulp.task('jasmine', function () {
    gulp.src('spec/RestApiTest.js')
        .pipe(jasmine())
});
