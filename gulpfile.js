var gulp = require('gulp'),
    sass = require('gulp-sass')
    rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.src('./src/flex.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('flexbox-lite.min.css'))
    .pipe(gulp.dest('./dist'));

});