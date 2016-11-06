var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function() {
    gulp.src('./src/flexbox-lite.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));

});