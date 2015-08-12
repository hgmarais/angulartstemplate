var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var tsc = require('gulp-tsc');
var tslint = require('gulp-tslint');

/**
 * A custom reporter for the TypeScript linter reporter function. This was copied
 * and modified from gulp-tslint.
 */
function tsLintlog(message, level) {
    var prefix = "[" + gutil.colors.cyan("gulp-tslint") + "]";

    if (level === "error") {
        gutil.log(prefix, gutil.colors.red("error"), message);
    } else if (level === "warn") {
        gutil.log(prefix, gutil.colors.yellow("warn"), message);
    } else {
        gutil.log(prefix, message);
    }
}

/**
 * A custom reporter for the TypeScript linter so we can pass 'warn' instead of
 * 'error' to be recognized by Visual Studio Code's pattern matcher as warnings
 * instead of errors. This was copied and modified from gulp-tslint.
 */
var tsLintReporter = function(failures, file) {
    failures.forEach(function(failure) {
        // line + 1 because TSLint's first line and character is 0
        tsLintlog('(' + failure.ruleName + ') ' + file.path +
            '[' + (failure.startPosition.line + 1) + ', ' +
            (failure.startPosition.character + 1) + ']: ' +
            failure.failure, 'warn');
    });
};

gulp.task('lint', function (cb) {
  gulp.src('ts/app/**/*.ts')
  .pipe(tslint())
  .pipe(tslint.report(tsLintReporter))
  .on('end', cb);
});

gulp.task('tsc', function (cb) {
  runSequence('tsc:app', 'tsc:unit', 'tsc:e2e', cb);
});

gulp.task('tsc:app', function() {
  return gulp.src(['ts/app/**/*.ts'])
  .pipe(tsc({target:'ES5', out:'app.js', declaration:true, outDir:'js/app'}))
  .pipe(gulp.dest('js/app/'))
  .on('end', function() {
    gulp.src('js/app/app.js').pipe(gulp.dest('www/js'));  
  });
});

gulp.task('tsc:e2e', function() {
  return gulp.src(['ts/e2e/**/*.ts'])
  .pipe(tsc({target:'ES5', outDir:'js/e2e'}))
  .pipe(gulp.dest('js/e2e/'));
});

gulp.task('tsc:unit', function() {
  return gulp.src(['ts/unit/**/*.ts'])
  .pipe(tsc({target:'ES5', outDir:'js/unit'}))
  .pipe(gulp.dest('js/unit/'));
});

gulp.task('clean', ['clean:tsc', 'clean:reports']);

gulp.task('clean:tsc', function (cb) {
  del([
    'js',
    'www/js'
  ], cb);
});

gulp.task('clean:reports', function (cb) {
  del([
    'reports'
  ], cb);
});

gulp.task('run:unit', function(cb) {
  exec('npm run karma', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('run:e2e', function(cb) {
  exec('npm run protractor', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
