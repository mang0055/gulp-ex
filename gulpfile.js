var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');
 
gulp.task('default', function() {
  return gulp.src(['js/app.js','js/controllers/*js'])
    .pipe(closureCompiler({
      compilerPath: 'bower_components/closure-compiler/lib/closure-compiler-v20161024.jar',
      fileName: 'build.js'
    }))
    .pipe(gulp.dest('dist'));
});