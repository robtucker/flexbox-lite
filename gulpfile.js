var gulp = require('gulp'),
    sass = require('gulp-sass')
    rename = require('gulp-rename')
    colors = require('colors');

gulp.task('default', function() {

    gulp.src('./src/flexbox-lite.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('flexbox-lite.min.css'))
    .pipe(gulp.dest('./dist'));

    console.log('executed default task successfully'.green);

});